import {
  ChangeEventHandler,
  DragEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { getFileList, getFiles } from '../lib'

export interface FileValidator {
  (files: File[]): boolean
}

export interface UseDropZoneFileInput {
  multiple?: boolean
  handleDrop: (files: File[]) => void
  onChange: (files: File[], isValid: boolean) => void
  validators?: FileValidator[]
  onFileDelete: (filteredFiles: File[]) => void
}

export const useDropZoneFileInput = ({
  multiple = false,
  handleDrop,
  onChange,
  onFileDelete,
  validators = [],
}: UseDropZoneFileInput) => {
  const [highlight, setHighlight] = useState(false)
  const { files, setFiles, removeFiles, validateFiles } = useFilesState()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    const files = getFiles(e.target.files, multiple)
    const isValid = validateFiles(validators, files)

    if (!isValid && fileInputRef.current) {
      fileInputRef.current.files = getFileList([])
      onChange(files, false)
      return
    }

    setFiles(files)
    onChange(files, true)

    if (fileInputRef.current) {
      fileInputRef.current.files = getFileList(files)
    }
  }

  const openFileDialog: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    fileInputRef.current?.click()
  }

  const onDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setHighlight(true)
  }

  const onDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setHighlight(false)
  }

  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setHighlight(false)

    const files = getFiles(e.dataTransfer.files, multiple)
    if (!files) return

    const isValid = validateFiles(validators, files)

    if (!isValid) return

    if (!fileInputRef.current) return

    setFiles(files)

    // handleDrop(getFileList(files)) // it must be different fileLists
    handleDrop(files) // it must be different fileLists
    fileInputRef.current.files = getFileList(files)
  }

  const handleFileDelete = (file: File) => () => {
    if (!fileInputRef.current) return
    const files = getFiles(fileInputRef.current.files, multiple)
    const filteredFiles = files.filter((f) => f.name !== file.name)
    setFiles(filteredFiles)

    const fileList = getFileList(filteredFiles)

    // onFileDelete(fileList)
    onFileDelete(filteredFiles)
    fileInputRef.current.files = fileList
  }
  const resetField = () => {
    if (!fileInputRef.current) return
    if (fileInputRef.current.files?.length !== 0) return
    removeFiles()
  }

  useEffect(resetField, [fileInputRef.current?.files?.length, removeFiles])

  return {
    fileInputRef,
    highlight,
    files,
    handleChange,
    onDrop,
    onDragLeave,
    openFileDialog,
    onDragOver,
    handleFileDelete,
  }
}

function useFilesState() {
  const [files, setFiles] = useState<File[]>([])

  const setFilesByMultiple = (files: File[]) => {
    setFiles(files)
  }

  const removeFiles = useCallback(() => {
    setFiles([])
  }, [])

  const validateFiles = useCallback(
    (validators: FileValidator[], files: File[]) =>
      validators.every((validator) => validator(files)),
    []
  )

  return { files, setFiles: setFilesByMultiple, removeFiles, validateFiles }
}
