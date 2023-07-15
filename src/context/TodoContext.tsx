import React, { createContext } from 'react'

interface TodoContextProps {
  todos: string[]
  addTodo: (text: string) => void
}

export const TodoContext = createContext<undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={undefined}>
      {props.children}
    </TodoContext.Provider>
  )
}
