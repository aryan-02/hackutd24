import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const KnowledgeAssistant = () => {
  const { queryResults, setQueryResults } = useAppContext();
  const [query, setQuery] = useState('');

  // Mock response function (replace this with backend API call in the future)
  const handleQuery = () => {
    if (query.trim() === '') {
      alert('Please enter a valid query.');
      return;
    }

    // Mock response (for now)
    const response = `This is a generated response for your query: "${query}"`;

    // Update query results in the context
    setQueryResults([...queryResults, { query, response }]);
    setQuery('');
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Knowledge Assistant</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question about your financial documents..."
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleQuery}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit Query
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Query Results:</h3>
        {queryResults.length > 0 ? (
          <ul>
            {queryResults.map((result, index) => (
              <li key={index} className="p-2 border-b">
                <strong>Q:</strong> {result.query}
                <br />
                <strong>A:</strong> {result.response}
              </li>
            ))}
          </ul>
        ) : (
          <p>No queries submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeAssistant;
