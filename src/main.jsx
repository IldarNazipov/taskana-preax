import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TaskEditorProvider } from '@/contexts/taskEditor';
import { TasksProvider } from '@/contexts/tasks';
import { IncomingTasks } from '@/pages/incomingTasks/IncomingTasks';
import { AppLayout } from '@/layouts/appLayout/AppLayout';
import '@/assets/styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <TaskEditorProvider>
        <AppLayout>
          <IncomingTasks />
        </AppLayout>
      </TaskEditorProvider>
    </TasksProvider>
  </StrictMode>
);
