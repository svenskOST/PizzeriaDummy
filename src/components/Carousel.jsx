import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Articles from './Articles'

function Carousel({ articles }) {
   const [currentIndex, setCurrentIndex] = useState(0)

   function nextArticle() {
      setCurrentIndex((currentIndex + 1) % articles.length)
   }

   function previousArticle() {
      setCurrentIndex((currentIndex - 1 + articles.length) % articles.length)
   }

   useEffect(
      function () {
         const timer = setInterval(function () {
            setCurrentIndex((currentIndex + 1) % articles.length)
         }, 5000)

         return function () {
            clearInterval(timer)
         }
      },
      [currentIndex, articles.length],
   )

   return (
      <div className='flex aspect-video w-[100%] flex-col overflow-hidden rounded-3xl border-green-800 text-white md:border-4 md:shadow-xl md:shadow-stone-400 lg:w-[80%] xl:w-2/3'>
         <div className='flex h-[90%] items-center pt-6'>
            <button
               className='flex h-fit w-12 flex-col transition-[transform] duration-200 hover:scale-125 sm:w-20'
               onClick={previousArticle}
            >
               <IoIosArrowBack className='h-full w-full fill-green-800' />
            </button>
            <Articles currentIndex={currentIndex} articles={articles} />
            <button
               className='flex h-fit w-12 flex-col transition-[transform] duration-200 hover:scale-125 sm:w-20'
               onClick={nextArticle}
            >
               <IoIosArrowForward className='h-full w-full fill-green-800' />
            </button>
         </div>
         <div className='flex h-[10%] items-center justify-center pt-2'>
            <div className='flex h-full w-1/4 items-center justify-center'>
               <span
                  className={`mx-[1vw] h-[2vw] w-[2vw] rounded-full bg-[rgba(0,0,0,0.6)] transition-[background-color] duration-300 sm:mx-2 sm:h-3 sm:w-3 ${
                     currentIndex == 0 ? 'bg-black' : ''
                  }`}
               ></span>
               <span
                  className={`mx-[1vw] h-[2vw] w-[2vw] rounded-full bg-[rgba(0,0,0,0.6)] transition-[background-color] duration-300 sm:mx-2 sm:h-3 sm:w-3 ${
                     currentIndex == 1 ? 'bg-black' : ''
                  }`}
               ></span>
               <span
                  className={`mx-[1vw] h-[2vw] w-[2vw] rounded-full bg-[rgba(0,0,0,0.6)] transition-[background-color] duration-300 sm:mx-2 sm:h-3 sm:w-3 ${
                     currentIndex == 2 ? 'bg-black' : ''
                  }`}
               ></span>
            </div>
         </div>
      </div>
   )
}

Carousel.propTypes = {
   articles: PropTypes.array,
}

export default Carousel
