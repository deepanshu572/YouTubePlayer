import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {fetchDataFromApi} from '../Utils/api'
export const Context = createContext();

export const AppContext = (props) =>{
    const [Loading , SetLoading] = useState(false);
    const [SearchResult , SetSearchResult] = useState();
    const [SelectCategories , SetSelectCategories] = useState("New");
    const [MobileMenu , SetMobileMenu] = useState(false);
    

    useEffect(() => {
        FetchSelectedCategoryData(SelectCategories)
    },[SelectCategories])

    const FetchSelectedCategoryData = (query)=>{
        SetLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
           console.log(contents);
           SetSearchResult(contents);
           SetLoading(false);

        })
    }

    return (
        <Context.Provider value={{Loading, SetLoading, SearchResult, SetSearchResult, SelectCategories, SetSelectCategories, MobileMenu, SetMobileMenu }}>
            {props.children}
        </Context.Provider>
    )
    
}