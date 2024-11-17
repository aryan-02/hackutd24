import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const FileUpload = () => {
  const { documents, setDocuments } = useAppContext();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (file) {
      const newDocument = { name: file.name, size: file.size };
      setDocuments([...documents, newDocument]);
      alert('File uploaded successfully!');
      setFile(null);
    }
  };

  return (
    <div className="mb-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
