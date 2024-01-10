const categories = [
  { id: 0, name: 'Fruit' },
  { id: 1, name: 'Movies' },
]

export const getCategory = async (id?: number) => {
  const category = categories.find(({ id: categoryId }) => categoryId === id)

  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => {
      if (category) resolve(category)
      reject(new Error(`There is no such category with id: ${id}.`))
    })
  })
}
