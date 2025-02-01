"use client";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CreateEventForm from "../Forms/CreateEventForm";


function CreateEventDrawer() {


    const [isOpen, setIsOpen] = useState(false);

  const router =   useRouter();
  const searchParams =  useSearchParams();

  useEffect(() => {
    if (searchParams.get("create") === "true"){
        setIsOpen(true)
    }

  }, [searchParams])

  const handleClose = () => {
    setIsOpen(false)
    if (searchParams.get("create") === "true"){
        router.replace(window.location.pathname);
    }
  }


  return (
    <Drawer open={isOpen} onClose={handleClose}>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Create New Event</DrawerTitle>
    </DrawerHeader>
    <CreateEventForm onFormSubmit={() => {handleClose()}}/>
    <DrawerFooter >
      <DrawerClose asChild>
        <Button variant="outline" onClick={handleClose}>Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default CreateEventDrawer
