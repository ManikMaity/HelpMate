"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usernameSchema } from "@/app/lib/validators";
import { useEffect } from "react";

function Dashboard() {



  const {isLoaded, user} = useUser();
  const {register, handleSubmit, setValue, formState : {errors}} = useForm({
    resolver: zodResolver(usernameSchema)
  });

  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded])

  const onSubmit = async (data) => {

  }

  return (
    <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>
        Welcome, {user?.firstName}
        </CardTitle>
       </CardHeader>
      {/* Upcoming Calls  */}
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>
        Your Unique Link
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-center gap-2">
              <span>{window.location.origin}/</span>
              <Input {...register("username")} />
            </div>
            {errors.username && errors.username.message && <p className="text-red-500 text-sm">{errors.username.message.toString()}</p>}
            <Button type="submit" className="mt-3">Update Username</Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default Dashboard
