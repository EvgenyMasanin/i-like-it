export const getUrl = (path: string) => (path ? `${import.meta.env.VITE_API_URL}/${path}` : '')
