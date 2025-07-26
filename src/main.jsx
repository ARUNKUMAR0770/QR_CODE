import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Code.css';
import {Code} from './Code';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Code />
  </StrictMode>,
)
