import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Menu from './components/Menu/Menu.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     exact: true,
//     children: [
//       { path: 'login', element: <Login /> },
//       { path: 'home', element: <Home /> },
//       { path: 'menu', element: <Menu /> }
//     ]
//   }
// ]);

const router = createBrowserRouter([
  { path: '/', element: <Home />, exact: true },
  { path: '/login', element: <Login /> },
  { path: '/menu', element: <Menu /> },
  {path: 'cartitem', element: <Cart />}
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)



