"use server";

import dbConnect from "@/lib/dbConnect";
import User from "@/models/users";
import { currentUser } from "@clerk/nextjs/server";

export const syncClerkUserToDb = async () => {
  try {
    await dbConnect();
    const clerkUser = await currentUser();
    if (!clerkUser)
      return {
        success: false,
        data: null,
        message: "Authentication failed",
      };

    const existingUser = await User.findOne({
      email: clerkUser.emailAddresses[0].emailAddress,
    });
    if (existingUser)
      return {
        success: true,
        data: null,
        message: "Already synced with database",
      };

    const newUser = await User.create({
      email: clerkUser.emailAddresses[0].emailAddress,
    });
    return {
      success: true,
      data: newUser,
      message: "Successfully synced with database",
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "Something went wrong",
    };
  }
};
