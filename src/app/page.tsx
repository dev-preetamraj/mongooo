import { getAllTodos } from "@/actions/todos";
import TodoWrapper from "@/components/todo-wrapper";

const HomePage = async () => {
  const todos = await getAllTodos();

  return (
    <div className="w-full h-full flex justify-center pb-4">
      <TodoWrapper todos={todos.data} />
    </div>
  );
};

export default HomePage;
