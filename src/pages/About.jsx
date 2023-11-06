import { useState } from 'react'
import Block from '../components/Block'
import Footer from '../components/Footer'
import { FaCircleArrowDown } from 'react-icons/fa6'
import '../components/styles/Image.css'
import imgUrl1 from '../assets/aboutUs.jpg'

function About() {
   const [isVisible, setIsVisible] = useState(false)

   function isInViewport(element) {
      var rect = element.getBoundingClientRect()
      return rect.top < document.documentElement.clientHeight - rect.height / 2
   }

   onscroll = function () {
      var image = document.getElementById('image')
      if (isInViewport(image)) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }

   return (
      <>
         <Block
            content={
               <>
                  <div className='md:min-h[500px] flex h-[95vh] min-h-[400px] w-full flex-col items-center justify-evenly py-20 lg:min-h-[600px]'>
                     <h1 className='text-5xl md:text-7xl lg:text-8xl'>
                        Vilka är vi?
                     </h1>
                     <h2 className='text-3xl md:text-5xl lg:text-6xl'>
                        Skrolla!
                     </h2>
                     <FaCircleArrowDown className='animate-bounce text-5xl text-green-800 md:text-6xl lg:text-7xl' />
                  </div>

                  <div className='flex h-fit w-full flex-col items-center'>
                     <img
                        id='image'
                        src={imgUrl1}
                        className={`aspect-square w-full object-cover ${
                           isVisible ? 'expanded' : 'notExpanded'
                        }`}
                     />
                     <h1>Vi är din lokala pizzeria</h1>
                     <p>
                        Lorem ipsum lång text beskriv din pizzeria underrubriken
                        idk
                     </p>
                  </div>
               </>
            }
            firstBlock={true}
         />
         <Footer />
      </>
   )
}

export default About
