import React from 'react'
import Context from './context';
import Header from './components/header/header'
import ArticleContainer from './components/articleContainer/articleContainer'
import { BrowserRouter, Route } from 'react-router-dom';
import SingleArticle from './components/currentArticle/currentArticle';
import Modal from './components/modal/modal';
function App() {
  
 
  let [articles, setArticles] =React.useState(
    JSON.parse(sessionStorage.getItem('articles'))?JSON.parse(sessionStorage.getItem('articles')):[
      {
        id:1,
        date:"24-10-5231",
        title:"Some Title 1",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id:2,
        date:"13-09-5431",
        title:"Some Title 2",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id:3,
        date:"11-11-2011",
        title:"Some Title 3",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id:4,
        date:"19-04-2016",
        title:"Some Title 4",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]
  )
  let [searchInp, setSearch] =React.useState('')
  let [activeModal,setActiveModal] = React.useState(false)
  let [modalArticle,setModalArticle] = React.useState({})
  function getSearch(){
      return searchInp;
  }
  function getArticles(){
    return articles;
}
  function removeArticle(id){
    console.log(typeof(id))
    let art  = (articles.filter(ar => ar.id!==parseInt(id)))
    sessionStorage.setItem('articles', JSON.stringify(art));
    setArticles(JSON.parse(sessionStorage.getItem('articles')))
    window.location.href="/"
  }
  function modifyArticle(newArticle) {
    console.log("modifyArticle")
    let ind = articles.findIndex(art =>art.id===newArticle.id)
    console.log(ind)
    if(ind!==-1){
      console.log('modify')
      let art  = (articles.filter(ar => ar.id!==newArticle.id))
      art.splice(ind,0,newArticle)
      sessionStorage.setItem('articles', JSON.stringify(art));
    }
    else{
      console.log("addnew")
      let art = [...articles,newArticle]
      console.log(art)
      sessionStorage.setItem('articles', JSON.stringify(art));
    }
    window.location.reload()
   
  }
 
  function switchModal() {
    setActiveModal(!activeModal)
  }
  function changeModalArticle(newArticle) {
    setModalArticle(newArticle)
  }
  return (
    <BrowserRouter>
    <Context.Provider value ={{removeArticle,setSearch,getSearch,getArticles,changeModalArticle,switchModal,modifyArticle}}>
      <div className="App">
      <Header></Header>
      <Modal Article = {modalArticle} Active = {activeModal}></Modal>
      <Route exact path="/modal" component={Modal}></Route>
      <Route exact  path="/article/:id" component={SingleArticle}></Route>
     <Route exact path="/" component = {ArticleContainer}></Route>
     
      </div>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
