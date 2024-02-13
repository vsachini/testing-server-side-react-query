'use server'

export async function getTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await res.json()
  } catch (error) {
    console.error(error)
    return []
  }
}
