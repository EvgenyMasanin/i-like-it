import { IconButton, List, ListItem, Text } from '@chakra-ui/react'

import { IoIosClose } from 'react-icons/io'

export interface FileListProps {
  files: File[]
  onFileDelete: (file: File) => () => void
}

export const FileList = ({ files, onFileDelete }: FileListProps) => (
  <List w="fit-content" maxH={100} overflowY="auto">
    {files.map((file) => (
      <ListItem
        key={file.name}
        fontSize="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Text>{file.name}</Text>

        <IconButton
          size="sm"
          fontSize="xx-large"
          variant="ghost"
          icon={<IoIosClose />}
          aria-label="delete file"
          onClick={onFileDelete(file)}
        />
      </ListItem>
    ))}
  </List>
)
