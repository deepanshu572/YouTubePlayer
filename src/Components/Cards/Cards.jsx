import React, { useContext } from 'react'
import { VideoContext } from '../../context/Context'

const Cards = () => {
    const products = useContext(VideoContext);
   console.log(products.data);
   const Alldata =  products.data;
  //  console.log(data);
   
   
  return (
    <div className='flex flex-wrap justify-center gap-4 '>
      
      {Alldata.map((val)=>{
        console.log(val);
          return (
                    <div className="card w-[20rem]">
                        <div className="card_video w-[20rem] h-[10rem] bg-white overflow-hidden">
                            {/* <img className='w-full h-full' src={val.channelThumbnail[0]?.url}  alt="" /> */}
                        </div>
                        <div className="card_heading text-[18px]">
                            {val.title}
                        </div>
                        <div className="card_desc text-[#727272] text-[13px] ">
                            {val.description}
                        </div>
                        <div className="card_info flex gap-3 text-[#727272] text-[13px]">
                            <p>{val.viewCount}</p>
                            <p>{val.publishedTimeText}</p>
                        </div>
                    </div>
                )
      })}
      
      
    </div>
  )
}

export default Cards