import React from 'react'
import Button from '../Button/button'
import Search from '../search/search'
import './header.css'

export default function Header(){
    let showAll = function(){
        window.location.href="/"
    }

    return(
        <div className ="header">
            <Button  btntext ="ShowList" reaction ={showAll}></Button>
            <Search>Search</Search>
            <Button  btntext ="ADd" reaction ={showAll}></Button>
            
        </div>
    )
}