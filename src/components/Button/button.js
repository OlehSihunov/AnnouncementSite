import React from 'react'
import './button.css'

export default function Button({btntext, reaction, argument}){
    argument = argument?argument:btntext
    return(
        <div className="custombtn" onClick={()=>reaction(argument)}>{btntext}</div>
    )
}