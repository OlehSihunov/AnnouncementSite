import React from 'react'
import Article from '../article/article';

export default class SingleArticle extends React.Component{
    

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id
      }
    render(){
        return <div>
            <Article id = {this.id}></Article>
            </div>
    }
    

}