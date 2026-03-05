import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';


export function App() {
    
    return     (
    <> 
    <Heading > 
      Olá mundo 1

      <button><TimerIcon /></button>
     
      </Heading>
               
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum, assumenda, iusto vel id et dignissimos nobis vitae praesentium ipsa laboriosam aut maxime neque 
      quibusdam unde qui fugiat, officia esse!
      </p>
    </>)
}


