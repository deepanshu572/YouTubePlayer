import React, { useContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from "../../Utils/api";
import { useParams } from 'react-router-dom';
import { Context } from '../../context/ContextApi';

const SearchResult = () => {
  const {SetLoading} = useContext(Context);

  const {serchQuery} = useParams();
  console.log(serchQuery);
  
  const [query, setQuery] = useState();

  useEffect(() => {
    SerchDataFetch();
  }, [serchQuery]);

   const SerchDataFetch = ()=>{
    SetLoading(true)
    fetchDataFromApi(`search/?q=${serchQuery}`).then((res)=>{
      console.log(res);
      setQuery(res);
      SetLoading(false);
    })
   }
  return (
    <>
gggg
    </>
  )
}

export default SearchResult