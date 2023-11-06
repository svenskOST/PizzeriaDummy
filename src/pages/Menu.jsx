import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'
import MenuTitle from '../components/MenuTitle'
import StaticMenuItem from '../components/StaticMenuItem'
import imgUrl1 from '../assets/Margherita.png'
import imgUrl2 from '../assets/Kebabpizza.png'
import imgUrl3 from '../assets/Svamppizza.png'
import imgUrl4 from '../assets/Special.png'
import imgUrl5 from '../assets/Paprika.png'
import imgUrl6 from '../assets/Pompei.png'
import imgUrl7 from '../assets/Hawaii.png'
import imgUrl8 from '../assets/Pepperoni.png'
import imgUrl9 from '../assets/Bolognese.png'
import imgUrl10 from '../assets/Carbonara.png'
import imgUrl11 from '../assets/ala.png'
import imgUrl12 from '../assets/Cola.png'
import imgUrl13 from '../assets/Fanta.png'
import imgUrl14 from '../assets/Vatten.png'

const pizzas = [
   {
      id: 1,
      img: imgUrl1,
      itemName: 'Margherita',
      price: '90 kr',
      ingredients: 'Tomatsås, mozarella, oregano',
      allergens: 'Gluten, laktos',
   },
   {
      id: 2,
      img: imgUrl2,
      itemName: 'Kebabpizza',
      price: '110 kr',
      ingredients: 'Tomatsås, mozarella, kebabkött, vitlökssås, jalapeño',
      allergens: 'Gluten, laktos',
   },
   {
      id: 3,
      img: imgUrl3,
      itemName: 'Svamppizza',
      price: '105 kr',
      ingredients: 'Mozarella, parmesan, basilika, brunsvamp',
      allergens: 'Gluten, laktos',
   },
   {
      id: 4,
      img: imgUrl4,
      itemName: 'Skänninge special',
      price: '120 kr',
      ingredients: 'Tomatsås, mozarella, bacon, kebabkött',
      allergens: 'Gluten, laktos, fläskkött',
   },
   {
      id: 5,
      img: imgUrl5,
      itemName: 'Pizza Paprika',
      price: '120 kr',
      ingredients: 'Tomatsås, mozarella, paprika, basilika, grillad fläskfilé',
      allergens: 'Gluten, laktos, fläskkött',
   },
   {
      id: 6,
      img: imgUrl6,
      itemName: 'Pompei',
      price: '118 kr',
      ingredients: 'Tomatsås, mozarella, gorgonzola, parmaskinka, basilika',
      allergens: 'Gluten, laktos, fläskkött',
   },
   {
      id: 7,
      img: imgUrl7,
      itemName: 'Hawaii',
      price: '115 kr',
      ingredients: 'Tomatsås, mozarella, skinka, annanas',
      allergens: 'Gluten, laktos, annanas',
   },
   {
      id: 8,
      img: imgUrl8,
      itemName: 'Pepperoni',
      price: '110 kr',
      ingredients: 'Tomatsås, mozarella, pepperoni',
      allergens: 'Gluten, laktos',
   },
]

const pasta = [
   {
      id: 1,
      img: imgUrl9,
      itemName: 'Spaghetti Bolognese',
      price: '85 kr',
      ingredients: 'Spaghetti, italiensk köttfärssås, hackad tomat',
      allergens: 'Gluten',
   },
   {
      id: 2,
      img: imgUrl10,
      itemName: 'Spaghetti Carbonara',
      price: '90 kr',
      ingredients: 'Spaghetti, carbonarasås, skinka',
      allergens: 'Gluten, fläskkött',
   },
   {
      id: 3,
      img: imgUrl11,
      itemName: 'Pasta á la Skänninge',
      price: '95 kr',
      ingredients: 'Pastarör, parmesan, vår hemmagjorda skänningesås',
      allergens: 'Gluten, laktos',
   },
]

const drinks = [
   {
      id: 1,
      img: imgUrl12,
      itemName: 'Coca Cola',
      price: '20 kr',
   },
   {
      id: 2,
      img: imgUrl13,
      itemName: 'Fanta',
      price: '20 kr',
   },
   {
      id: 3,
      img: imgUrl14,
      itemName: 'Vatten',
      price: '10 kr',
   },
]

function Menu() {
   return (
      <>
         <MenuTitle title={'Pizza'} />
         <div className='flex flex-wrap justify-center'>
            {pizzas.map((pizza) => (
               <MenuItem key={pizza.id} item={pizza} />
            ))}
         </div>
         <MenuTitle title={'Pasta'} />
         <div className='flex flex-wrap justify-center'>
            {pasta.map((pasta) => (
               <MenuItem key={pasta.id} item={pasta} />
            ))}
         </div>
         <MenuTitle title={'Dricka'} />
         <div className='flex flex-wrap justify-center'>
            {drinks.map((drink) => (
               <StaticMenuItem key={drink.id} item={drink} />
            ))}
         </div>
         <Footer />
      </>
   )
}

export default Menu
