import React from 'react';
import { AppProvider } from './context/AppContext';
import FileUpload from './components/FileUpload';
import DocumentManagement from './components/DocumentManagement';
import KnowledgeAssistant from './components/KnowledgeAssistant';
import InsightsAnalytics from './components/InsightsAnalytics';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">SaveMoneyWith.Tech</h1>
          <p className="text-lg text-gray-700">Your secure, AI-powered financial assistant.</p>
        </header>
        <main>
          <section className="mb-6">
            <FileUpload />
          </section>
          <section className="mb-6">
            <DocumentManagement />
          </section>
          <section className="mb-6">
            <KnowledgeAssistant />
          </section>
          <section className="mb-6">
            <InsightsAnalytics />
          </section>
        </main>
        <footer className="text-center mt-10 text-gray-500">
          © 2024 SaveMoneyWith.Tech - All Rights Reserved.
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
