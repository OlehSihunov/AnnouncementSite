import React from 'react'
import Context from '../../context'
import './modal.css'
export default class Modal extends React.Component {
    static contextType  = Context
    constructor(props){
        super(props)
        this.Article = {}
        
    }
    componentDidUpdate(){
        this.Article = {
            id:this.props.Article.id,
            title:this.props.Article.title,
            text:this.props.Article.text,
            date:this.props.Article.date,
        }
    }
    updateTitleValue(e){
        this.Article.title = e.target.value
    }
    updateDateValue(e){
        this.Article.date = e.target.value
    }
    updateTextValue(e){
        this.Article.text = e.target.value
    }
    saveChanges(){
        this.context.modifyArticle(this.Article)
        this.closeModal()
    }
    closeModal(){
       this.context.switchModal()
    }
    render(){
            return(
                <div className={this.props.Active?"modalOverlay":"hide"}>
                <div className="modalWindow">
                    
                    <p className = "holder">Title:</p>
                    <input type="text" defaultValue={this.props.Article.title} onChange ={e=>this.updateTitleValue(e)}></input>
                    <p className = "holder">Date:</p>
                    <input type="text" defaultValue={this.props.Article.date} onChange ={e=>this.updateDateValue(e)}></input>
                    <p className = "holder">Text:</p>
                    <input type="text" defaultValue={this.props.Article.text} onChange ={e=>this.updateTextValue(e)}></input>
                    <div className = "closeModal" onClick={()=>this.closeModal()}>CLOSE</div>
                    <div className = "Save" onClick={()=>this.saveChanges()}>Save</div>
                </div>
            </div>)
    }
    
}


