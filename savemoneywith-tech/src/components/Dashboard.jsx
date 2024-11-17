import React from 'react';
import FileUpload from './FileUpload';
import DocumentManagement from './DocumentManagement';
import KnowledgeAssistant from './KnowledgeAssistant';
import InsightsAnalytics from './InsightsAnalytics';

const Dashboard = () => (
  <div>
    <FileUpload />
    <DocumentManagement />
    <KnowledgeAssistant />
    <InsightsAnalytics />
  </div>
);

export default Dashboard;
