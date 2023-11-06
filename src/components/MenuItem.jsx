import PropTypes from 'prop-types'
import { useState } from 'react'
import './styles/MenuItemFlip.css'

function MenuItem({ item }) {
   const [cardFlipped, setCardFlipped] = useState(false)

   function toggleCardFlipped() {
      setCardFlipped(!cardFlipped)
      console.log(cardFlipped)
   }

   return (
      <div
         className='card relative m-10 h-80 w-64 cursor-pointer rounded-3xl transition-[scale] duration-200'
         onClick={toggleCardFlipped}
      >
         <div
            className={`content relative h-full w-full rounded-3xl shadow-lg shadow-stone-800 transition-[transform] duration-1000 ${
               cardFlipped ? 'flipped' : ''
            }`}
         >
            <div className='front absolute left-0 top-0 flex h-full w-full flex-col justify-evenly rounded-3xl bg-green-700 text-center'>
               <img className='mx-10 mt-3' src={item.img} />
               <div>
                  <h1 className='mx-4 text-2xl'>{item.itemName}</h1>
                  <h2 className='mt-2 text-xl'>{item.price}</h2>
               </div>
            </div>
            <div className='back absolute left-0 top-0 h-full w-full rounded-3xl bg-green-800 text-white'>
               <h1 className='mx-5 mt-8 text-2xl'>Ingredienser:</h1>
               <p className='mx-5 my-2 text-lg'>{item.ingredients}</p>
               <h1 className='mx-5 mt-5 text-2xl'>Allergener:</h1>
               <p className='mx-5 my-2 text-lg'>{item.allergens}</p>
            </div>
         </div>
      </div>
   )
}

MenuItem.propTypes = {
   item: PropTypes.object,
}

export default MenuItem
