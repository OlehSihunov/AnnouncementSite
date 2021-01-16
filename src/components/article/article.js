import React from 'react'
import Context from '../../context';
import Button from '../Button/button';
import img from '../../img/img1.jpg'
import './article.css'
export default function Article({id}){
    const {removeArticle,getArticles,changeModalArticle,switchModal} = React.useContext(Context)
   
    const art = getArticles().find(art=>art.id===parseInt(id))
    let editArticle=function(){
        changeModalArticle(art)
        switchModal()
    }
    return(
        
        <div className ="article">
            <div className ="imageBlock"><img src={img} alt ="img"></img></div>
            <div className ="dateBlock">{art.date}</div>
            <div className ="textBlock">
                <div>
                    <h2>{art.title}</h2>
                    <p>{art.text}</p>
                 </div>
                <div className="buttonBlock">
                    <Button btntext="Find Same" link={``} reaction ={removeArticle} argument={id}></Button>
                    <Button btntext="Edit" reaction ={()=>editArticle()} argument={id}></Button>
                    <Button btntext="Delete" reaction ={removeArticle} argument={id}></Button>
                </div>
                
            </div>
        </div>
    )
}