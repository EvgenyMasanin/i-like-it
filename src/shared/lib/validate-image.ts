export const validateImage = (files: File[]) => files.every((file) => file.type === 'image/jpeg')
