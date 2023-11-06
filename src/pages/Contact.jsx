import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import Footer from '../components/Footer'
import Block from '../components/Block'
import PageButton from '../components/PageButton'

function Contact() {
   return (
      <>
         <Block
            content={
               <>
                  <div>
                     <div>
                        <h1>Du kan nå oss på:</h1>
                        <div>
                           <div>
                              <AiOutlinePhone />
                              <h2>Telefon</h2>
                           </div>
                           <p>070-391 57 29</p>
                        </div>
                        <div>
                           <div>
                              <AiOutlineMail />
                              <h2>Mail</h2>
                           </div>
                           <p>dinpizzeria@mail.com</p>
                        </div>
                     </div>

                     <div>
                        <h1>Vill du hitta hit?</h1>
                        <PageButton
                           text={'Besök nu'}
                           path={'/'}
                           onClick={() => {
                              window.scrollTo(0, document.getElementById('visitSection').getBoundingClientRect().top + window.scrollY)
                           }}
                        />
                     </div>
                  </div>
               </>
            }
            firstBlock={true}
         />
         <Footer />
      </>
   )
}

export default Contact
