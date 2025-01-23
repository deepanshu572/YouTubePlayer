import React, { useContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from "../../Utils/api";
import { useParams } from 'react-router-dom';
import { Context } from '../../context/ContextApi';
import SearchResultData from './SearchResultData';

const SearchResult = () => {
  const { SetLoading } = useContext(Context);

  const { serchQuery } = useParams();

  const [query, setQuery] = useState();

  useEffect(() => {
    SerchDataFetch();
  }, [serchQuery]);


  const SerchDataFetch = () => {
    SetLoading(true)
    fetchDataFromApi(`search/?q=${serchQuery}`).then((res) => {
      setQuery(res?.contents);
      SetLoading(false);
    })
  }


  return (
    <>

<div className=" w-[80%] ml-auto pt-[86px] ">

{query?.length > 0 && query.map((val) => {
  // console.log(val);
  return <SearchResultData key={val.id} videoData={val} />
})}
  
  </div>
    </>
  )
}

export default SearchResult