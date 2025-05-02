import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

///pages
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Certificados from './pages/Certificados/Certificados';
import Projetos from './pages/Projetos/Projetos';

///components
import NotFound from './components/NotFound/NotFound';
import Chatbot from "./components/ChatBot/ChatBot";

function App() {

  return (
      <div>
        <BrowserRouter>
        
            <Chatbot/>
            
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/certificados' element={<Certificados/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Routes>

        </BrowserRouter>
      </div>
  )
}

export default App
