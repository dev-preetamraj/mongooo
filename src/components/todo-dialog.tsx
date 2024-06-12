"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import TodoForm from "./forms/todo-form";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const TodoDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PlusIcon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Write the things which is important for you so that you can do it
            later.
          </DialogDescription>
        </DialogHeader>
        <TodoForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default TodoDialog;
