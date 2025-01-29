import { db } from "@/config/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function checkUser() {
  const user = await currentUser();
  if (!user) {
    return  null;
  }

  try {
    const loggedInUser = db.user.findUnique({
        where : {
            clerkUserId : user.id
        }
    })
    if (loggedInUser) {
        return loggedInUser;
    }
    else {
        const name = `${user.firstName} ${user.lastName}`;
        const email = user.emailAddresses[0].emailAddress;
        (await clerkClient()).users.updateUser(user.id, {
            username : name.split(" ").join("-")+user.id.slice(0,5),
        })
        const createdUser = db.user.create({
            data: {
                name,
                clerkUserId : user.id,
                email,
                imageUrl : user.imageUrl,
                username : name.split(" ").join("-")+user.id.slice(0,5),
            }
        })
        return createdUser;
    }
  }
  catch (error) {
    console.error(error);
  }
}