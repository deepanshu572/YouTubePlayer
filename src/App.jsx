import React from 'react'
import TopNav from './Components/TopNav/TopNav'
import SideNav from './Components/SideNav/SideNav'
import TopFilter from './Components/TopFilter/TopFilter'
import Cards from './Components/Cards/Cards'

const App = () => {
  return (
    <>
    <TopNav/>
    <div className="flex">
    <SideNav/>
       <div className="ml-auto pt-[5rem] w-[81%]">
        <TopFilter/>
        <Cards/>
       </div>
    </div>
    </>
  )
}

export default App