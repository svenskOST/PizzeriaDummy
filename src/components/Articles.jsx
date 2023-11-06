import PropTypes from 'prop-types'
import Article from './Article'

function Articles({ currentIndex, articles }) {
   return (
      <div className='relative flex h-full w-full overflow-hidden rounded-xl md:rounded-3xl'>
         {articles.map((article) => (
            <Article
               key={article.id}
               article={article}
               className={`${
                  article.id - 1 == currentIndex
                     ? 'currentArticle'
                     : 'notCurrentArticle'
               }`}
            />
         ))}
      </div>
   )
}

Articles.propTypes = {
   currentIndex: PropTypes.number,
   articles: PropTypes.array,
}

export default Articles
