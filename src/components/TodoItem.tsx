import { motion } from 'framer-motion'
import { Todo } from '../context/TodoContext'
import cn from 'classnames'
import { useTodo } from '../context'
import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin7Line } from 'react-icons/ri'

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

  const editInputRef = useRef<HTMLInputElement>(null)

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId)
    toast.success('todo deleted succesfully!')
  }

  return (
    <motion.li
      layout
      className={cn(
        `p-5 rounded-xl bg-zinc-900`,
        todo.status === 'completed' && 'bg-opacity-50 text-zinc-500',
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </motion.span>
      <div className="flex justify-between gap-5 text-white">
        {/* button update */}

        {/* button status */}

        {/* button delete */}
        <button
          onClick={() => handleDelete(todo.id)}
          className="flex items-center gap-2 text-red-500
        "
        >
          <RiDeleteBin7Line />
          Delete
        </button>
      </div>
    </motion.li>
  )
}
