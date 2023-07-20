import { motion } from 'framer-motion'
import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import cn from 'classnames'

// todo context
import { useTodo } from '../context'
import { Todo } from '../context/TodoContext'

// icons
import { RiDeleteBin7Line } from 'react-icons/ri'
import { BsCheck2Square } from 'react-icons/bs'
import { TbRefresh } from 'react-icons/tb'

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

  const editInputRef = useRef<HTMLInputElement>(null)

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId)
    toast.success('todo deleted succesfully!')
  }

  const handleStatus = (todoId: string) => {
    updateTodoStatus(todoId)
    toast.success('todo status updated succesfully!')
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
        
        {/* button status */}
        <button onClick={() => handleStatus(todo.id)}>
          {todo.status === 'undone' ? (
            <span className="flex items-center gap-2">
              <BsCheck2Square />
              Mark Completed
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <TbRefresh />
              Mark Undone
            </span>
          )}
        </button>

        {/* button update */}

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
