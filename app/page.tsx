'use client'

import { useCompletion } from 'ai/react'

export default function Completion() {

  const { completion, input, handleInputChange, handleSubmit } = useCompletion({api: '/api/completion'});

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Enter a recipe"
          onChange={handleInputChange}
        />
      </form>
      <div className="whitespace-pre-wrap my-6">{completion}</div>
    </div>
  )
}