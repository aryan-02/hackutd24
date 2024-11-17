import React from 'react';
import { useAppContext } from '../context/AppContext';

const DocumentManagement = () => {
  const { documents } = useAppContext();

  return (
    <div>
      <h2 className="text-xl font-semibold">Document Management</h2>
      <ul>
        {documents.length > 0 ? (
          documents.map((doc, index) => (
            <li key={index} className="p-2 border-b">
              {doc.name} - {doc.size} bytes
            </li>
          ))
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </ul>
    </div>
  );
};

// Add this line to fix the issue
export default DocumentManagement;
