# FRJ-8_Router_DOM
Apa itu Router DOM?
  - <b>Router DOM</b> merupakan library standar untuk routing di React. Ini memungkinkan navigasi di antara tampilan berbagai komponen dalam Aplikasi React, memungkinkan mengubah URL browser, dan menjaga UI tetap sinkron dengan URL.
  
  Sumber : https://medium.com/@surya.surakhman/1o1-react-js-berkenalan-dengan-react-router-dom-e613c843e7ee, https://www.w3schools.com/react/react_router.asp dan https://www.geeksforgeeks.org/reactjs-router/
  
  Contoh Penggunaan Router DOM yaitu :
  
        //menambahkan Browser Router di file : main.jsx
        import {BrowserRouter} from "react-router-dom"
        
        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            // menambahkan Browser Router
            <BrowserRouter>
              <App />
            </BrowserRouter>
            //akhir dari Browser Router
          </React.StrictMode>
        )
        
        //membuat Route di file App.jsx
        import React from 'react'
        import {Routes, Route} from "react-router-dom" -> menambahkan 
        import Home from './page/home.jsx'
        import Login from './page/Login.jsx'
        
        //merupakan component yang bernama App
        export default function App(){
          
          //merupakan bagian JSX
          return (
            <Routes>
              <Route path="/" element={<Login/>}>Login</Route>
              <Route path="/home" element={<Home/>}>Home</Route>
            </Routes>
          )
        }
        
