import React  from 'react';
import Main from './pages/Main/main';
import { BrowserRouter,Routes,Route, useParams} from "react-router-dom";




export default function App() {

  
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  )   
  }
