import React from 'react'
import Article from '../article/article'
import './articleContainer.css'
export default function ArticleContainer(){
    return(
        <div className ="articleContainer">
            <Article></Article>
            <Article></Article>
            <Article></Article>
        </div>
    )
}