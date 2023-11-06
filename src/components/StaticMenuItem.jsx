import PropTypes from 'prop-types'

function StaticMenuItem({ item }) {
   return (
      <div className='m-10 flex h-80 w-64 flex-col justify-evenly rounded-3xl bg-green-700 text-center shadow-lg shadow-stone-800 transition-[transform] duration-200 hover:scale-110'>
         <img className='mx-14 mt-3' src={item.img} />
         <div>
            <h1 className='mx-4 text-2xl'>{item.itemName}</h1>
            <h2 className='mt-2 text-xl'>{item.price}</h2>
         </div>
      </div>
   )
}

StaticMenuItem.propTypes = {
   item: PropTypes.object,
}

export default StaticMenuItem
