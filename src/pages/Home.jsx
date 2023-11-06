import Block from '../components/Block'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import PageButton from '../components/PageButton'
import { AiOutlineClockCircle } from 'react-icons/ai'
import imgUrl1 from '../assets/Pizza1.jpg'
import imgUrl2 from '../assets/Pizza2.jpg'
import imgUrl3 from '../assets/Pizza3.png'

const articles = [
   {
      id: 1,
      img: 'url(' + imgUrl1 + ')',
      title: 'Välkommen till din pizzeria',
      text: 'Vi har samarbetat med Webbspace UF och lanserar nu vår egen webbsida.',
      button: <PageButton text={'Läs mer'} path={'/om-oss'} />,
   },
   {
      id: 2,
      img: 'url(' + imgUrl2 + ')',
      title: 'Dagens lunch',
      text: 'Välkommen in att beställa dagens lunch för endast 110 kr!',
      button: (
         <PageButton
            text={'Besök nu'}
            path={'/'}
            onClick={() => {
               window.scrollTo(0, document.getElementById('visitSection').getBoundingClientRect().top + window.scrollY)
            }}
         />
      ),
   },
   {
      id: 3,
      img: 'url(' + imgUrl3 + ')',
      title: 'Nyhet!',
      text: 'Testa vår nya Skänninge-special.',
      button: <PageButton text={'Till menyn'} path={'/meny'} />,
   },
]

function Home() {
   return (
      <>
         <Block
            content={
               <>
                  <Carousel articles={articles} />
               </>
            }
            firstBlock={true}
         />
         <Block
            content={
               <>
                  <div id='visitSection' className='relative flex h-full w-full flex-col justify-center pb-5'>
                     <h1 className='mb-10 mt-5 text-center text-2xl sm:mb-14 sm:mt-0 sm:text-3xl md:mt-8 lg:mt-5 lg:text-4xl xl:mb-16'>
                        Besök oss
                     </h1>

                     <div className='flex flex-col items-center justify-around xl:flex-row-reverse xl:items-stretch'>
                        <div className='aspect-video w-[95%] rounded-xl border-green-800 md:rounded-3xl md:border-4 md:p-10 md:shadow-xl md:shadow-stone-400 lg:w-[80%] xl:w-2/3'>
                           <iframe
                              className='h-full w-full rounded-xl md:rounded-3xl'
                              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDl5vCpqnGY-mc5coVs3tVfgc2kf9nYhwU&q=Pizzeria+Happy+Time,Trädgårdsgatan+2,+596+31+Skänninge'
                           ></iframe>
                        </div>

                        <ul className='flex flex-col items-center justify-between w-2/3 rounded-2xl bg-green-800 py-16 mt-20 mb-10 xl:my-0 xl:py-20 text-center text-lg text-white md:text-xl md:shadow-xl md:shadow-stone-400 lg:rounded-3xl xl:w-1/4 xl:text-2xl'>
                           <div className='mb-10 xl:mb-4 flex items-center'>
                              <AiOutlineClockCircle className='mr-4 text-2xl md:text-3xl xl:text-4xl' />
                              <h1 className='text-xl md:text-2xl xl:text-3xl'>
                                 Öppettider
                              </h1>
                           </div>
                           <li className='mb-5 xl:mb-0'>
                              <p>Måndag - Torsdag:</p>
                              <p>10:00 - 21:00</p>
                           </li>
                           <li className='mb-5 xl:mb-0'>
                              <p>Fredag & Lördag:</p>
                              <p>10:00 - 23:00</p>
                           </li>
                           <li>
                              <p>Söndag:</p>
                              <p>11:00 - 20:00</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </>
            }
         />
         <Footer />
      </>
   )
}

export default Home
