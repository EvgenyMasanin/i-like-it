export const imitateFetch = async (
  data: unknown,
  errMessage: string = '',
  slowCount: number = 1
) => {
  await Promise.all(
    Array(slowCount)
      .fill(0)
      .map((_, i) => fetch(`https://jsonplaceholder.typicode.com/todos/${i+1}`))
  )

  return new Promise((resolve, reject) => {
    if (data) resolve(data)
    reject(new Error(errMessage))
  })
}
