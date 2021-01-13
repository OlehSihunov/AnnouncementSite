import React from 'react'
import Article from '../article/article'
import './articleContainer.css'
export default function ArticleContainer({Articles}){
    return(
        <div className ="articleContainer">
            {Articles.map(({id,date,title,text}) => {
                return <Article date={date} title={title} text={text} id = {id} key ={id}></Article>
            })}
        </div>
    )
}