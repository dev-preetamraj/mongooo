"use client";

import { ITodo } from "@/models/todos";
import { format } from "date-fns";
import { TrashIcon } from "lucide-react";
import UpdateStatusForm from "./forms/update-status-form";
import { Button } from "./ui/button";
import DeleteTodoAction from "./delete-todo-action";

type Props = {
  todos: ITodo[] | null;
};

const TodoWrapper = ({ todos }: Props) => {
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      {todos?.map((todo) => (
        <div
          key={todo._id}
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-4 bg-card p-4 rounded-md"
        >
          <div className="flex-1 flex flex-col space-y-1">
            <h1>{todo.title}</h1>
            <p className="text-sm font-extralight">{todo.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-40 flex flex-col space-y-1">
              <p>Due date</p>
              <p className="text-sm font-extralight">
                {format(todo.dueDate ?? "", "PP")}
              </p>
            </div>
            <div className="w-24 flex flex-col space-y-1">
              <p>Status</p>
              {todo.isCompleted ? (
                <p className="text-sm text-green-500">Completed</p>
              ) : (
                <p className="text-sm text-yellow-500">Pending</p>
              )}
            </div>
            <div className="w-24 flex flex-col items-end space-y-1">
              <p>Actions</p>
              <div className="flex items-center space-x-2">
                <UpdateStatusForm todo={todo} />
                <DeleteTodoAction _id={todo._id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoWrapper;
