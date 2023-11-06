import { useState } from 'react'
import PropTypes from 'prop-types'
import { GiFullPizza } from 'react-icons/gi'
import NavPageButton from './NavPageButton'
import './styles/NavbarAnimations.css'

function Navbar({ style }) {
   const [menuVisible, setMenuVisible] = useState(false)

   function toggleMenuVisible() {
      setMenuVisible(!menuVisible)
   }

   return (
      <header
         className='fixed z-10 flex h-[20vw] max-h-[100px] min-h-[40px] w-full items-center justify-center rounded-b-[20px] bg-green-800 text-white shadow-lg shadow-stone-800 transition-[top] duration-500 sm:h-[90px] sm:rounded-b-[30px] md:h-[100px] md:rounded-b-[40px]'
         style={style}
      >
         <div className='flex w-3/5 min-w-fit items-center justify-start pl-3 sm:pl-10 md:pl-16 lg:w-2/5'>
            <GiFullPizza className='mr-1 h-[10vw] w-[10vw] fill-yellow-300 sm:mr-2 sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px]' />
            <p className='ml-1 text-[5vw] text-yellow-300 sm:ml-2 sm:text-xl md:text-2xl'>
               Din pizzerias namn
            </p>
         </div>
         <nav className='hidden w-3/5 flex-row justify-evenly pr-5 lg:flex'>
            <NavPageButton text={'Hem'} link={'/'} />
            <NavPageButton text={'Meny'} link={'/meny'} />
            <NavPageButton text={'Om oss'} link={'/om-oss'} />
            <NavPageButton text={'Kontakt'} link={'/kontakt'} />
         </nav>
         <nav className='flex w-2/5 justify-end pr-8 sm:pr-16 md:pr-24 lg:hidden'>
            <button
               className={`menuIcon group flex h-full w-[8vw] flex-col transition-[transform] duration-200 hover:scale-110 sm:w-[50px] md:w-16 ${
                  menuVisible ? 'open' : ''
               }`}
               onClick={toggleMenuVisible}
            >
               <span className='sm:my[4px] my-[0.5vw] h-[0.7vw] w-full rounded-md bg-white transition-[background] duration-200 group-hover:bg-yellow-300 sm:h-[5px] md:my-[5px] md:h-[6px]'></span>
               <span className='sm:my[4px] my-[0.5vw] h-[0.7vw] w-full rounded-md bg-white transition-[background] delay-75 duration-200 group-hover:bg-yellow-300 sm:h-[5px] md:my-[5px] md:h-[6px]'></span>
               <span className='sm:my[4px] my-[0.5vw] h-[0.7vw] w-full rounded-md bg-white transition-[background] delay-150 duration-200 group-hover:bg-yellow-300 sm:h-[5px] md:my-[5px] md:h-[6px]'></span>
            </button>
            <menu
               className={`dropdownMenu absolute -right-72 top-[110px] flex h-fit w-48 flex-col rounded-2xl bg-green-800 p-8 text-center shadow-lg shadow-stone-800 transition-[right] duration-300 ease-in-out sm:w-60 sm:p-10 md:top-[130px] ${
                  menuVisible ? 'show' : ''
               }`}
            >
               <NavPageButton text={'Hem'} link={'/'} />
               <NavPageButton text={'Meny'} link={'/meny'} />
               <NavPageButton text={'Om oss'} link={'/om-oss'} />
               <NavPageButton text={'Kontakt'} link={'/kontakt'} />
            </menu>
         </nav>
      </header>
   )
}

Navbar.propTypes = {
   style: PropTypes.object,
}

export default Navbar
