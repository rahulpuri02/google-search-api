import React, { useContext, useEffect, useState } from 'react'
import SearchResultHeader from './SearchResultHeader'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { Context } from '../utils/ContextApi';
import { fetchDataFromApi } from '../utils/api';
import SearchResultTemplate from './SearchResultTemplate';
import SearchImageTemplate from './SearchImageTemplate';




const SearchResults = () => {

    const [result, setResult] = useState();
    const {query, startIndex} = useParams();
    const {imageSearch} = useContext(Context);

   useEffect(() => {
    fetchSearchResult();
   }, [query, startIndex, imageSearch])


    const fetchSearchResult = () => {
        let payload = {q: query, start: startIndex}
        if(imageSearch) {
          payload.searchType ='image'
        }
        fetchDataFromApi(payload).then((res) => {
          console.log(res)
          setResult(res);
        })
    };

    if(!result) return;
    const { items, queries, searchInformation} = result;

    
   return (
 <div className='flex flex-col min-h-[100vh]'>
  <SearchResultHeader />
  <main className='grow p-[12px] pb-0 md:pr-5 md:pl-20 '>
    <div className='flex text-sm text-[#70757a] mb-3'>
      {`About ${searchInformation.formattedTotalResults} results (${searchInformation.formattedSearchTime} seconds)`}
    </div>

    {!imageSearch ? (<>
    { items.map((item, i) => {
        return <SearchResultTemplate key={i} data={item} />
      })
    }
    </>) : (
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {items.map((item, i) => {
        return   <SearchImageTemplate key={i} Searchdata={item} />
        })
      }
      </div>
    )}
  </main>
  <Footer />
 </div>
  )
}

export default SearchResults