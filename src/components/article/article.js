import React from 'react'
import Button from '../Button/button';
import img from '../../img/img1.jpg'
import './article.css'
export default function Article({date,title,text}){
    return(
        <div className ="article">
            <div className ="imageBlock"><img src={img}></img></div>
            <div className ="dateBlock">24-10-2056</div>
            <div className ="textBlock">
                <div>
                    <h2>Some Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                 </div>
                <Button btntext="Find Same"></Button>
            </div>
        </div>
    )
}