import PropTypes from 'prop-types'

function MenuTitle({ title }) {
   return (
      <h1 className='mx-auto mb-10 mt-36 w-2/3 min-w-fit rounded-2xl bg-green-800 px-16 text-center text-8xl text-gray-100 lg:ml-[5vw] lg:rounded-3xl lg:text-9xl'>
         {title}
      </h1>
   )
}

MenuTitle.propTypes = {
   title: PropTypes.string,
}

export default MenuTitle
