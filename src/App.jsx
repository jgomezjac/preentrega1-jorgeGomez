//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Lista de items'/>} />
          <Route path='/category/:cid' element={<ItemListContainer greeting='Lista de items'/>} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
