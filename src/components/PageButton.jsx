import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PageButton({ text, path, onClick }) {
   return (
      <div className='flex h-[60%] w-full items-start justify-end px-[4vw] py-[3vw] sm:h-[65%] sm:px-5 sm:py-3 lg:h-[68%]'>
         <Link
            className='rounded-md bg-[rgb(10,10,10)] px-[3vw] py-[1.5vw] text-[4vw] shadow-md shadow-green-800 transition-[transform] duration-200 hover:scale-110 sm:rounded-lg sm:px-5 sm:py-3 sm:text-xl md:m-2 md:text-2xl lg:rounded-xl xl:px-6 xl:py-3 xl:text-3xl'
            to={path}
            onClick={onClick}
         >
            {text}
         </Link>
      </div>
   )
}

PageButton.propTypes = {
   text: PropTypes.string,
   path: PropTypes.string,
   onClick: PropTypes.func,
}

export default PageButton
