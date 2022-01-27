import React, {UseEffect, useState, useRef, Component, createContext, useContext} from 'react'
import {UserProvider, UserContext, Counter} from './components/UserContext'
import stringify from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from "react-router-dom"

/*#import components   */

import Header    from "./components/Header"
import HomeGuest from "./components/HomeGuest" 
import Footer    from "./components/Footer"
import Edit     from "./components/Edit" 
import Result     from "./components/Result" 

function Main() {
    return( 
        <BrowserRouter>
        <UserProvider> 
         <Header /> 
         <Switch>
             <Route path="/" exact><HomeGuest /></Route>
             <Route path="/Edit" exact><Edit /></Route>
             <Route path="/Result" exact><Result /></Route>
         </Switch>
         <Footer />
        </UserProvider> 
        </BrowserRouter>
        )
}




ReactDOM.render(<Main />, document.querySelector("#wordtrainer"));


