//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import ProductListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ProductListContainer greeting='Lista de items'/>
    </>
  )
}

export default App
