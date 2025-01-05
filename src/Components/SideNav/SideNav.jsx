import React from 'react'

import { IoHomeSharp , IoGameController} from "react-icons/io5";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdLiveTv , MdOutlineBiotech, MdLibraryMusic} from "react-icons/md";
import {FaMicroblog, FaRegNewspaper } from "react-icons/fa";





const SideNav = () => {
    const navData = [
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Home",
            img : <IoHomeSharp />
        },
        {
            label : "Gaming",
            img : <IoGameController />
        },
        {
            label : "Sports",
            img : <MdOutlineSportsSoccer /> 
        },
        {
            label : "Entertainment",
            img : <MdLiveTv />

        },
        {
            label : "Technology",
            img : <MdOutlineBiotech />

        },
        {
            label : "Music",
            img : <MdLibraryMusic />


        },
        {
            label : "Blog",
            img : <FaMicroblog />



        },
        {
            label : "News",
            img : <FaRegNewspaper />



        },
    ]
  return (
    <>
   <div className="side_nav h-[100vh] overflow-x-scroll fixed bg-black w-[15rem] top-[12%]" >
    {navData.map((val , index)=>{
        return(
            <div key={index} className="side_nav_btn flex">
            {val.img}
            <p>{val.label}</p>
            </div>
        )
 
    })}

   </div>
    </>
  )
}

export default SideNav