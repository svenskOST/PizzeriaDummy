import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './styles/NavPageButton.css'

function NavPageButton({ text, link }) {
   return (
      <NavLink
         className='px-2 py-1 text-lg transition-[transform] duration-100 hover:scale-125 sm:px-3 sm:py-2 sm:text-xl'
         to={link}
      >
         {text}
      </NavLink>
   )
}

NavPageButton.propTypes = {
   text: PropTypes.string,
   link: PropTypes.string,
}

export default NavPageButton
