import PropTypes from 'prop-types'
import './styles/Article.css'

function Article({ article, className }) {
   return (
      <div
         className={`article absolute flex h-full w-full flex-col items-start justify-end rounded-xl bg-cover transition-[transform] duration-500 md:rounded-3xl ${className}`}
         style={{ backgroundImage: article.img }}
      >
         {article.button}
         <div className='h-[40%] w-full rounded-b-xl bg-[rgba(0,0,0,0.6)] px-3 pt-1 sm:h-[35%] sm:pt-2 md:rounded-b-3xl md:px-5 md:pt-3 lg:h-[32%]'>
            <h1 className='text-[4.2vw] sm:text-2xl md:text-3xl lg:mb-1 xl:text-3xl'>
               {article.title}
            </h1>
            <p className='sm:text-md text-[3vw] md:text-xl xl:text-xl'>
               {article.text}
            </p>
         </div>
      </div>
   )
}

Article.propTypes = {
   article: PropTypes.object,
   className: PropTypes.string,
}

export default Article
