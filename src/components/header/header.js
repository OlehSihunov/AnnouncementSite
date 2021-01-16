import React from 'react'
import Button from '../Button/button'
import Search from '../search/search'
import Context from '../../context'
import './header.css'

export default function Header(){
    let {switchModal,changeModalArticle} = React.useContext(Context)
    let showAll = function(){
        window.location.href="/"
    }
    let addNew = function () {
        let newArt = {
            id:new Date().getTime(),
            title:"",
            text:"",
            date:new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2),
        }
        changeModalArticle(newArt)
        switchModal()
    }

    return(
        <div className ="header">
            <Button  btntext ="ShowList" reaction ={showAll}></Button>
            <Search>Search</Search>
            <Button  btntext ="ADd" reaction ={addNew}></Button>
            
        </div>
    )
}