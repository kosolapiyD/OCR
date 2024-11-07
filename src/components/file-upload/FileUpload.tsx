import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { AiFillFileAdd } from 'react-icons/ai';

import './FileUpload.css';

type FileUploadProps = {
  onFileAccepted: (file: File) => void;
};
const FileUpload = ({ onFileAccepted }: FileUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileAccepted(acceptedFiles[0]);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: '.pdf',
    // accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    multiple: false,
  });

  const dropText = isDragActive
    ? 'Drop the files here ...'
    : 'Drag‘n’drop your file here, or click to select files';

  return (
    <div
      className={`uploadContainer ${isDragActive ? 'active' : ''}`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <AiFillFileAdd
        size={18}
        style={{ marginInlineEnd: '5px', minWidth: '20px' }}
      />
      <p>{dropText}</p>
    </div>
  );
};

export default FileUpload;
