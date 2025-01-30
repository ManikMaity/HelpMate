import { z } from "zod";

export const usernameSchema = z.object({
    username: z.string({
      message: "Please enter a valid username",
      required_error: "Username is required",
    }).min(3, {message: "Username must be at least 3 characters"}).max(20, {message: "Username must be less than 20 characters"})
    .regex(/^[a-zA-Z0-9_-]+$/, {message: "Username can only contain letters, numbers, underscores and hyphens"}),
  });