import React, { useContext } from "react";
import { categories } from "../../Utils/constant";
import SideNavItem from "./SideNavItem";
import { Context } from "../../context/ContextApi";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const { SetSelectCategories, SelectCategories } = useContext(Context);

  const nav = useNavigate();

  const clickHandler = (name , type)=>{
    switch (type) {
      case "home":
        return SetSelectCategories(name);
    
      case "category":
        return SetSelectCategories(name);
    
      case "menu":
        return false;
    
      default:
        break;
    }
  }


  return (
    <>
      <div className="side_nav h-[100vh] pt-5 pb-5 p-[6px] overflow-y-scroll  fixed bg-black w-[15rem] top-[12%]">
        {categories.map((val , index) => {
          return (
            <>
              <SideNavItem
                text={val.type == "Home" ? "Home" : val.name}
                key={index}
                icon={val.icon}
                action={()=>{
                  clickHandler(val.name, val.type);
                  nav("/")
                }}
                className={`${
                  SelectCategories == val.name ? "bg-[#121212]" : "bg-black"
                }`}
              />
              {
                val.divider && (
                  <hr className="my-5 border-white/[0.2]" />
                )
              }
            </>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;
