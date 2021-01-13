import React from 'react'
import './button.css'

export default function Button({btntext, reaction}){
    return(
        <div className="custombtn" onClick={()=>reaction(btntext)}>{btntext}</div>
    )
}