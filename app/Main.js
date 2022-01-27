import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from "react-router-dom"

/*#import components   */

import Header    from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer    from "./components/Footer"
import About     from "./components/About"
import Terms     from "./components/Terms"

function Main() {
    return( 
        <BrowserRouter>
         <Header /> 
         <Switch>
             <Route path="/" exact><HomeGuest /></Route>
             <Route path="/AboutUs" exact><About /></Route>
             <Route path="/Terms" exact><Terms /></Route>
         </Switch>
         <Footer />
        </BrowserRouter>
        )
}




ReactDOM.render(<Main />, document.querySelector("#app"));


