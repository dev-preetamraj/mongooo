"use client";
import { ITodo } from "@/models/todos";
import { Checkbox } from "@/components/ui/checkbox";
import { updateTodoStatus } from "@/actions/todos";
import { useRouter } from "next/navigation";

type Props = { todo: ITodo };

const UpdateStatusForm = ({ todo }: Props) => {
  const router = useRouter();
  const onChange = async () => {
    const response = await updateTodoStatus(!todo.isCompleted, todo._id);
    if (response.success) return router.refresh();
  };
  return (
    <Checkbox
      className="w-5 h-5"
      checked={todo.isCompleted}
      onCheckedChange={onChange}
    />
  );
};

export default UpdateStatusForm;
