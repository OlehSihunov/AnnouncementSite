import React from 'react'
import './button.css'

export default function Button({link="",btntext, reaction, argument}){
    argument = argument?argument:btntext
    return(
        <a href={link}><div className="custombtn" onClick={()=>reaction(argument)}>{btntext}</div></a>
    )
}