import PropTypes from 'prop-types'

function SocialButton({ icon, url }) {
   return (
      <a
         className='mx-5 my-2 text-7xl text-yellow-300 transition-[transform] duration-200 hover:scale-125'
         href={url}
      >
         {icon}
      </a>
   )
}

SocialButton.propTypes = {
   icon: PropTypes.element,
   url: PropTypes.string,
}

export default SocialButton
