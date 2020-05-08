import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'

export default function SearchGoods() {    
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const searchValue = search.get("value");

    return (
        <div>
            <Header searchValue={ searchValue } />
            <Main searchValue={ searchValue }/>    
        </div>
    )
}
