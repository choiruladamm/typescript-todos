import { motion } from "framer-motion";
import { TodoItem } from './TodoItem'
import { useTodo } from "../context";
import { IoCloudyNight } from "react-icons/io5";

export const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <IoCloudyNight className="text-5xl" />
          you have nothing todo!
        </h1>
      </div>
    )
  }

  return (
    <motion.ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </motion.ul>
  )
}
