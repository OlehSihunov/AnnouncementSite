import React from 'react'
import Button from '../Button/button'
import Search from '../search/search'
import './header.css'

export default function Header(){
    let addNewAnn = function(article){
        console.log(article)
    }

    return(
        <div className ="header">
            <Button link="/" btntext ="ShowList" reaction ={addNewAnn}></Button>
            <Search>Search</Search>
            <Button  btntext ="ADd" reaction ={addNewAnn}></Button>
            
        </div>
    )
}