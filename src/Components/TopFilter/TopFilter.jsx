import { data } from 'autoprefixer'
import React, { useContext } from 'react'
import { VideoContext } from '../../context/Context';

const TopFilter = () => {
   const products = useContext(VideoContext);
     console.log(products.filters[0].filter);
     const filterData =  products.filters;
     console.log(filterData[0].filter);
     
    
  return (
    <>
    <div className="btn_filter_wrap">
      <div className="btn_left_icon"></div>
     
      <div className="btn_content whitespace-nowrap overflow-scroll w-[94%] m-auto">
       
      {filterData.map((val , index)=>{
        return (
          <div key={index} className="btn_box inline-flex items-center justify-center bg-[#222222] cursor-pointer px-[16px] py-[3px] mb-[18px] mr-[10px] rounded-md transition-all  hover:bg-[#3F3F3F]"><p>{val.filter}</p></div>
        )
      })}
      </div>
      <div className="btn_right_icon"></div>
    </div>
    </>
  )
}

export default TopFilter