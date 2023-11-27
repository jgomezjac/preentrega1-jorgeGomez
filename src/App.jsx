import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {  CartContextProvider } from './contexts/CartContext/CartContext';

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Lista de items'/>} />
            <Route path='/category/:cid' element={<ItemListContainer greeting='Lista de items'/>} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
  )
}

export default App