import * as z from 'zod'

export function getFormData(
  dto: Record<string, string | Blob | File[]>,
  useFilenameAsKey?: boolean
) {
  const formData = new FormData()
  Object.entries(dto).forEach(([key, value]) => {
    const { isSuccess, files, other } = parseValue(value)
    if (isSuccess) {
      files.forEach((file) => formData.append(useFilenameAsKey ? file.name : key, file))
    } else {
      formData.append(key, other)
    }
  })

  return formData
}

const parseValue = (value: string | Blob | File[]) => {
  const parsedValue = z.instanceof(File).array().safeParse(value)

  return {
    isSuccess: parsedValue.success,
    files: parsedValue.success ? parsedValue.data : [],
    other: value as string | Blob,
  }
}
