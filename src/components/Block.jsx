import PropTypes from 'prop-types'

function Block({ content, firstBlock, lastBlock }) {
   return (
      <section
         className={`relative mt-24 flex h-fit w-full flex-col items-center justify-center rounded-none text-black sm:mt-32 md:rounded-[30px] ${
            firstBlock ? 'md:mt-22 xl:mt-10' : 'md:mt-52'
         } ${
            lastBlock
               ? 'bg-green-700 pb-10 pt-10 md:min-h-[55vh] md:rounded-b-none md:pt-5 '
               : 'bg-white py-8 sm:py-16 md:min-h-[105vh] md:p-10'
         }`}
         style={{ boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.5' }}
      >
         {content}
      </section>
   )
}

Block.propTypes = {
   content: PropTypes.element,
   firstBlock: PropTypes.bool,
   lastBlock: PropTypes.bool,
}

export default Block
