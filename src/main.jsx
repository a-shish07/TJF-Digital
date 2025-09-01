import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import SeoProvider from './components/SeoProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeoProvider>
      <App />
    </SeoProvider>
  </StrictMode>,
)
