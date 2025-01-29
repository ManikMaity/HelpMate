import { db } from "@/config/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function checkUser() {
  const user = await currentUser();
  if (!user) {
    console.log("No user found");
    return  null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
        where : {
            clerkUserId : user.id
        }
    })
    if (loggedInUser) {
      console.log(loggedInUser);
      console.log("User already exists");
        return loggedInUser;
    }
    else {
        const name = `${user.firstName} ${user.lastName}`;
        const email = user.emailAddresses[0].emailAddress;
        (await clerkClient()).users.updateUser(user.id, {
            username : name.split(" ").join("-")+user.id.slice(5,8).toUpperCase(),
        })
        const createdUser = await db.user.create({
            data: {
                name,
                clerkUserId : user.id,
                email,
                imageUrl : user.imageUrl,
                username : name.split(" ").join("-")+user.id.slice(5,8).toLocaleLowerCase(),
            }
        })
        console.log("User created");
        return createdUser;
    }
  }
  catch (error) {
    console.log("Error in checkUser");
  }
}