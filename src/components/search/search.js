
import React from 'react'

import Context from '../../context'
import Button from '../Button/button'
import './search.css'

export default function Search(){
    let {setSearch} = React.useContext(Context)
  
    let updateSearchValue= function(e){
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return(
        <div className="search">
            <input type="text" placeholder="Search.." onChange ={e=>updateSearchValue(e)}></input>
           <Button btntext="search" reaction={()=>(alert('1'))}></Button>
        </div>
    )
}