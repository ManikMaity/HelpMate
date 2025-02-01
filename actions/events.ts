"use server";
import { createEventSchema } from "@/app/lib/validators";
import { db } from "@/config/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createEvent(data) {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("User not authenticated");
    }
    const validatedData = createEventSchema.parse(data);
    const exiting  = await db.user.findUnique({
        where : {clerkUserId : userId}
    });
    if (!exiting) {
        throw new Error("User not found");
    }

    const event = await db.event.create({
        data : {
            ...validatedData,
            userId : exiting.id
        }
    });

    return event;
}


export async function getUserEvents() {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("User not authenticated");
    }

    const exiting  = await db.user.findUnique({
        where : {clerkUserId : userId}
    });
    if (!exiting) {
        throw new Error("User not found");
    }

    const events = await db.event.findMany({
        where : {
            userId : exiting.id
        },
        orderBy : {
            createdAt : "desc"
        },
        include : {
            _count : {
                select : {bookings : true}
            }
        }
    })

    return {events, username : exiting.username};
}

export async function deleteEvent(id) {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("User not authenticated");
    }

    const exiting  = await db.user.findUnique({
        where : {clerkUserId : userId}
    });
    if (!exiting) {
        throw new Error("User not found");
    }
    
    const event = await db.event.findUnique({
        where : {
            id
        }
    });

    if (!event || event.userId !== exiting.id){
        throw new Error("Event not found");
    }

    await db.event.delete({
        where : {
            id
        }
    });

    return {success : true};
}