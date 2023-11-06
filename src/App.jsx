import './index.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import imgUrl1 from './assets/PizzaPattern.png'

var initialScrollValue = 0

function App() {
   const [showNavbar, setShowNavbar] = useState(true)

   document.onscroll = function () {
      if (window.scrollY < initialScrollValue || window.scrollY < 100) {
         setShowNavbar(true)
      } else {
         setShowNavbar(false)
      }
      initialScrollValue = window.scrollY
   }

   return (
      <>
         <div
            className='fixed top-0 -z-10 min-h-full min-w-full'
            style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}
         ></div>
         <Navbar style={{ top: `${showNavbar ? '0px' : '-120px'}` }} />
         <Routes>
            <Route
               path='/'
               element={
                  <>
                     <Home />
                  </>
               }
            ></Route>
            <Route
               path='/meny'
               element={
                  <>
                     <Menu />
                  </>
               }
            ></Route>
            <Route
               path='/om-oss'
               element={
                  <>
                     <About />
                  </>
               }
            ></Route>
            <Route
               path='/kontakt'
               element={
                  <>
                     <Contact />
                  </>
               }
            ></Route>
         </Routes>
      </>
   )
}

export default App
