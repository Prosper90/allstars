import React, {useEffect} from 'react';

export default function Paginationbutton({ totalItems, itemsPerPage, currentPage, setCurrentPage }) {


  /*
    useEffect(() => {
      // Fetch data from the server using an API call based on the current page number
      //getProjects();
    }, [currentPage]);
  */
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      };
    
      const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
      };

  return (
    <div className='absolute bottom-[60px] md:bottom-[34px] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center gap-[35px] text-[#fff]'>
      <button onClick={handlePrevPage} 
       disabled={currentPage === 1}
       className='bg-transparent hover:bg-[#fff] hover:text-[#000] text-white text-center rounded-[20px] px-8 md:px-20 py-[6px] border border-[#fff] z-[99999999]'
       >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          disabled={currentPage === index + 1}
          className='text-[#fff]'
        >
          {index + 1}
        </button>
      ))}
      <button 
       onClick={handleNextPage} 
       disabled={currentPage === totalPages}
       className='bg-transparent hover:bg-[#fff] hover:text-[#000] text-white text-center rounded-[20px] px-8 md:px-20 py-[6px] border border-[#fff] z-[99999999]'
       >
        Next
      </button>
    </div>
  )
}
