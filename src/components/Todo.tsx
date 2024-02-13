'use client'

import { getTodos } from '@/server/actions'
import { useQuery } from '@tanstack/react-query'

interface TodoProps {
  id: number
  title: string
  completed?: boolean
}

export default function Todo() {
  const { data } = useQuery<TodoProps[]>({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })

  return (
    <div>
      {data?.map((todo) => (
        <div key={todo.id} className="mb-4">
          <h1 className="text-2xl">{todo.title}</h1>
          <p className="text-gray-500">{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </div>
  )
}
