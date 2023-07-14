import { useEffect, useRef, useState } from 'react'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      setTodos([...todos, input])
      setInput('')
      console.log(input);
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="start typing your todo list..."
        />
        <button
          type="submit"
          className="bg-white text-slate-900 px-5 py-2 text-sm font-normal rounded-full active:scale-95 border-2 border-white"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
