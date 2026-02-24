import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Texto from './App';
import Somar from './Soma';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Texto />
    <Somar />    
  </StrictMode>,
)
