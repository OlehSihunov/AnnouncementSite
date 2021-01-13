
import React from 'react'
import Button from '../Button/button'
import './search.css'

export default function Search(){
    let text = ''
    let searchArticle = function(article){
        alert(text)
    }
    let updateSearchValue= function(e){
        text = e.target.value
    }

    return(
        <div className="search">
            <input type="text" placeholder="Search.." onChange ={e=>updateSearchValue(e)}></input>
            <Button btntext="search" reaction={searchArticle}></Button>
        </div>
    )
}