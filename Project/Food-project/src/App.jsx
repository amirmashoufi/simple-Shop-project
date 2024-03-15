import Login from './components/Login'
import './App.css'
import CartProvider from './store/CartProvider'
import Menu from './components/Menu/Menu'
//import Header from './components/Headers/Header'

function App() {

  return (
    <CartProvider>

    <Login />

    </CartProvider>

  )
}

export default App
