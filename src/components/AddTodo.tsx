import { useState } from 'react'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('data stored')
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="start typing your todo list..."
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
        />
        <button
          type="submit"
          className="bg-white text-slate-900 px-5 py-2 text-sm font-normal rounded-xl active:scale-95 border-2 border-white"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
