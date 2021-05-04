import React, {useState} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:8080'

//my components
import Header from "./components/Header"
import Home from "./components/Home"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from './components/FlashMessages'
import ExampleContext from './ExampleContext'

function Main () {
  const [loggedIn, setLoggedIn]=useState(Boolean(localStorage.getItem("complexappToken")))
  const [flashMessages, setFlashMessages] = useState([])

  function addFlashMessage(msg){
  setFlashMessages(prev =>  prev.concat(msg))
}  
return (
    <ExampleContext.Context.Provider value={addFlashMessage}>
    <BrowserRouter>
      <FlashMessages messages={flashMessages}/>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Home /> : <HomeGuest />}
            </Route>
            <Route path="/post/:id">
              <ViewSinglePost />
            </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          </Switch>
          <Footer />

      </BrowserRouter>
      </ExampleContext.Context.Provider>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}


if (module.hot) {
  module.hot.accept()
}
