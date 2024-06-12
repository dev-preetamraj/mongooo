"use server";

import dbConnect from "@/lib/dbConnect";
import { IActionResponse } from "@/lib/types";
import Todo, { ITodo } from "@/models/todos";
import User from "@/models/users";
import { currentUser } from "@clerk/nextjs/server";

export const createTodo = async (todo: Partial<ITodo>) => {
  try {
    await dbConnect();

    const clerkUser = await currentUser();
    if (!clerkUser)
      return {
        success: false,
        data: null,
        message: "Unauthorised",
      };

    const user = await User.findOne({
      email: clerkUser.emailAddresses[0].emailAddress,
    });
    if (!user)
      return {
        success: false,
        data: null,
        message: "Unauthorised",
      };

    const newTodo = await Todo.create({ userId: user._id, ...todo });
    return {
      success: true,
      data: newTodo,
      message: "Todo added successfully",
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

export const getAllTodos = async (): Promise<IActionResponse<ITodo[]>> => {
  try {
    await dbConnect();

    const clerkUser = await currentUser();
    if (!clerkUser)
      return {
        success: false,
        data: null,
        message: "Unauthorised",
      };

    const dbUser = await User.findOne({
      email: clerkUser.emailAddresses[0].emailAddress,
    });
    if (!dbUser)
      return {
        success: false,
        data: null,
        message: "Unauthorised",
      };

    const todos = await Todo.find({
      userId: dbUser._id,
    }).sort({ createdAt: -1 });
    return {
      success: true,
      data: todos,
      message: "Fetched successfully",
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

export const updateTodoStatus = async (
  isCompleted: boolean,
  _id: string
): Promise<IActionResponse<null>> => {
  try {
    await dbConnect();
    await Todo.updateOne({ _id }, { isCompleted }, { upsert: true });
    return {
      success: true,
      data: null,
      message: "Status updated successfully",
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

export const deleteTodoById = async (
  _id: string
): Promise<IActionResponse<null>> => {
  try {
    await dbConnect();
    await Todo.findByIdAndDelete(_id);
    return {
      success: true,
      data: null,
      message: "Todo deleted successfully",
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
