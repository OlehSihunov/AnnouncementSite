import React from 'react'
import Context from '../../context'
import ArticleMin from '../articleMin/articleMin'
import './articleContainer.css'
export default function ArticleContainer({Articles=[]}){
    const {getSearch , getArticles} = React.useContext(Context)
    if(Articles.length===0){
        Articles = getArticles()
    }
    function filteredArticles() {
       
        return Articles.filter(art=>art.title.toLowerCase().includes(getSearch().toLowerCase()))
    }
    
    return(
        <div className ="articleContainer">
            {filteredArticles().map(({id}) => {
                return <ArticleMin id = {id} key ={id}></ArticleMin>
            })}
        </div>
    )
}