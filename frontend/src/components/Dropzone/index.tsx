import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './styles.css';
import {FiUpload} from 'react-icons/fi';



interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
  const [selectedFUrl, setSelectedFUrl] = useState('')


  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);

    setSelectedFUrl(fileURL)
    onFileUploaded(file)
  }, [onFileUploaded])

  
  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()}  accept="image/*"/>
      
  
      { selectedFUrl 
      ? <img src={selectedFUrl} />
       : (
        <p>
        <FiUpload />
          Imagem do estabelecimento
          </p>
       )
    }
    </div>
  )
}


export default Dropzone;
