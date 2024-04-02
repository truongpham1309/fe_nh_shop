import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthorizationProvider } from './contexts/Authenzication.tsx'


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthorizationProvider>
        <App />
      </AuthorizationProvider>
    </React.StrictMode>,
  </QueryClientProvider>
)
