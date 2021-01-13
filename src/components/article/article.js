import React from 'react'
import Context from '../../context';
import Button from '../Button/button';
import img from '../../img/img1.jpg'
import './article.css'
export default function Article({id,date,title,text}){
    const {removeArticle} = React.useContext(Context)
    return(
        <div className ="article">
            <div className ="imageBlock"><img src={img} alt ="img"></img></div>
            <div className ="dateBlock">{date}</div>
            <div className ="textBlock">
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                 </div>
                <Button btntext="Find Same" reaction ={removeArticle} argument={id}></Button>
            </div>
        </div>
    )
}