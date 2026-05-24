import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ThemeModeProvider, ThemeMoodContext } from './ulties/ThemeMood.jsx'

createRoot(document.getElementById('root')).render(
<ThemeModeProvider>
        <App />
</ThemeModeProvider>
       
        

   

   
 
)
