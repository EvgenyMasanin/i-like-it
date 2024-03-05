export function getFiles(fileList: FileList | null, allowMultiple: boolean) {
  const files = Array.from(fileList ?? [])

  return allowMultiple ? files : files.slice(0, 1)
}
