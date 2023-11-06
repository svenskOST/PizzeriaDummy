import Block from './Block'
import SocialButton from './SocialButton'
import {
   AiOutlineFacebook,
   AiOutlineInstagram,
   AiOutlineHome,
   AiOutlinePhone,
   AiOutlineMail,
} from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'

function Footer() {
   return (
      <Block
         content={
            <>
               <div className='mb-10 mt-5 flex w-full flex-col items-center justify-around text-lg text-white md:mb-0 md:mt-14 md:flex-row'>
                  <div className='mb-5 text-center md:text-left'>
                     <div className='mb-5'>
                        <div className='mb-2 flex items-center justify-center md:justify-start'>
                           <AiOutlineHome className='mr-3 text-[32pt]' />
                           <h2 className='text-2xl'>Adress</h2>
                        </div>
                        <p>Trädgårdsgatan 2, 596 31 Skänninge</p>
                     </div>
                     <div className='mb-5'>
                        <div className='mb-2 flex items-center justify-center md:justify-start'>
                           <AiOutlinePhone className='mr-3 text-[32pt]' />
                           <h2 className='text-2xl'>Telefon</h2>
                        </div>
                        <p>070-391 57 29</p>
                     </div>
                     <div className='mb-5 md:mb-0'>
                        <div className='mb-2 flex items-center justify-center md:justify-start'>
                           <AiOutlineMail className='mr-3 text-[32pt]' />
                           <h2 className='text-2xl'>Mail</h2>
                        </div>
                        <p>dinpizzeria@mail.com</p>
                     </div>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                     <h1 className='text-2xl'>Följ oss</h1>
                     <div className='flex'>
                        <SocialButton
                           icon={
                              <>
                                 <AiOutlineInstagram />
                              </>
                           }
                           url={'instagram.com'}
                        />
                        <SocialButton
                           icon={
                              <>
                                 <AiOutlineFacebook />
                              </>
                           }
                           url={'facebook.com'}
                        />
                     </div>
                  </div>
               </div>

               <div className='mb-5 flex min-w-fit items-center'>
                  <GiFullPizza className='mr-1 h-[10vw] w-[10vw] fill-yellow-300 sm:mr-2 sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px]' />
                  <p className='ml-1 text-[5vw] text-yellow-300 sm:ml-2 sm:text-xl md:text-2xl'>
                     Din pizzerias namn
                  </p>
               </div>

               <div>
                  <p className='text-center'>
                     © Copyright 2023 - All Rights Reserved | Developed by
                     Webbspace UF
                  </p>
               </div>
            </>
         }
         lastBlock={true}
      />
   )
}

export default Footer
