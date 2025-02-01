import { z } from "zod";

export const usernameSchema = z.object({
    username: z.string({
      message: "Please enter a valid username",
      required_error: "Username is required",
    }).min(3, {message: "Username must be at least 3 characters"}).max(20, {message: "Username must be less than 20 characters"})
    .regex(/^[a-zA-Z0-9_-]+$/, {message: "Username can only contain letters, numbers, underscores and hyphens"}),
  });

export const createEventSchema = z.object({
    title: z.string({
      message: "Please enter a valid title",
      required_error: "Title is required",
    })
    .min(3, {message: "Title must be at least 3 characters"})
    .max(50, {message: "Title must be less than 50 characters"}),
    
    description: z.string({
      message: "Please enter a valid description",
      required_error: "Description is required",
    })
    .min(1, {message: "Description must be at least 1 characters"})
    .max(200, {message: "Description must be less than 200 characters"}),

    duration : z.number({
      message: "Please enter a valid duration",
      required_error: "Duration is required",
    }).int().positive("Duration must be a positive number"),

    isPrivate : z.boolean({
      message: "Please enter a valid privacy setting",
      required_error: "Privacy setting is required",
    })
})