import React from 'react'
import Context from '../../context';
import Button from '../Button/button';
import './articleMin.css'


export default function ArticleMin({id}){
    const {removeArticle,getArticles} = React.useContext(Context)
   
    const art = getArticles().find(art=>art.id===parseInt(id))
    return(
        
        <div className ="articleMin">
            <div className ="infoBlock">
                <div className ="dateBlock">Date: {art.date}</div>
                <div className ="textBlock">{art.title}</div>
            </div>
           
            <div className="buttonBlock">
                    <Button btntext="Delete" reaction ={removeArticle} argument={id}></Button>
                    <Button btntext="More" link={`article/${id}`} reaction ={removeArticle} argument={id}></Button>
            </div>
        </div>
    )
}