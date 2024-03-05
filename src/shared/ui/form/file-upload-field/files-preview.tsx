import { ReactNode } from 'react'

import { FileList } from './file-list'

interface FilesPreviewProps {
  files: File[]
  onFileDelete: (file: File) => () => void
  renderFilesPreview?: (files: File[], onFileDelete: (file: File) => () => void) => ReactNode
}

const FilesPreview = ({ files, onFileDelete, renderFilesPreview }: FilesPreviewProps) => {
  if (renderFilesPreview) return renderFilesPreview(files, onFileDelete)

  return <FileList files={files} onFileDelete={onFileDelete} />
}

export default FilesPreview
