"use client";
import { Copy, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface EventCardProps {
    event: ({
        _count: {
            bookings: number;
        };
    } & {
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        description: string;
        duration: number;
        isPrivate: boolean;
    });
    username: string;
    isPrivate : boolean;
}
function EventCard({event, username, isPrivate = true} : EventCardProps) {

    const router = useRouter();
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/${username}/${event.id}`);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false); 
            }, 3000);
        }
        catch (error) {
            console.error("Failed to copy");
        }
    }

  return (
    <Card className="flex flex-col justify-between cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
        <CardDescription className="flex justify-between">
            <span>
            {event.duration} minutes | {event.isPrivate ? "Private" : "Public"}
            </span>
            <span>
                {event._count.bookings} Bookings
            </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm">{event.description}</p>
      </CardContent>
     {isPrivate && <CardFooter className="flex flex-col gap-2">
        <p className="text-xs text-start">Created by <span className="text-blue-400">{username}</span></p>
        <div className="flex gap-2 justify-between w-full">
            <Button variant="outline" size={"sm"} onClick={handleCopy}><Copy/>{isCopied ? "Copied" : "Copy Link"}</Button>
            <Button variant="destructive" size={"sm"}><Trash/>Delete Event</Button>
        </div>
      </CardFooter>}
    </Card>
  )
}

export default EventCard
