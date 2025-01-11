import React from 'react'
// import Home from './Components/Home/Home'
// import ProductDetail from './Components/ProductDetail/ProductDetail'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import SearchResult from './Component/Search/SearchResult'
import VideoDetail from './Component/VideoDetail/VideoDetail'
// import Header from './Component/Header/Header'
// import SideNav from './Component/SideNav/SideNav'

const App = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchResult/:serchQuery" element={<SearchResult />} />
        <Route path="/video/:id" element={<VideoDetail />} />
    </Routes>
    </>
  )
}

export default App