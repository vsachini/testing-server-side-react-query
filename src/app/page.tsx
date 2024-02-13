import Todo from '@/components/Todo'
import { getTodos } from '@/server/actions'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 className="text-4xl font-bold">Todos</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Todo />
      </HydrationBoundary>
    </main>
  )
}
