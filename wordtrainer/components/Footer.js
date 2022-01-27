import React, {UseEffect, useState, useRef, Component, createContext, useContext} from 'react'
import {Link} from 'react-router-dom'
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
        
   
class FooterContent extends Component  {
  state = {
    posts: [],
    isLoading: true,
    error: null,
           };
    
  static contextType = UserContext;  
    
  getLessonListInfo() {
    Axios('http://192.168.0.100:9080/json/footer')
      .then(response => {
     const posts = JSON.parse(JSON.stringify(response.data));  
      /*  JsonArray posts = new JsonArray(response.data); */
    /*  const posts = JSON.parse(response.data); */
       

        this.setState({
          posts,
          isLoading: false
                    });
                         })
        .catch(error => this.setState({ error, isLoading: false }));
   
                      }
  componentDidMount() {
    /*this.getLessonListInfo();
    setInterval(this.getLessonListInfo(), 5000)*/
    setInterval( () => {this.getLessonListInfo()},5000)
                      }
    
   render() {
    const { isLoading, posts } = this.state;
    const user = this.context;                       
                              
      if (isLoading) return ( <p>Loading .....</p>)
              else return ( <p>Right: {user.countright} Wrong: {user.countwrong} Lesson: {posts.lesson} Login: {posts.login_user} Count: {user.counter}</p>
                             
                         )
          }
}
  
function Footer() {
   
    return (
       <footer className="border-top text-center small text-muted py-3">
         
        <FooterContent/>
      
      <p><Link to="/" className="mx-1">Home</Link> | <Link className="mx-1" to="/Edit">Edit</Link> | <Link className="mx-1" to="/Result">Result</Link></p>
      <p className="m-0">Copyright &copy; 2020 <a href="/" className="text-muted">WordTrainer</a>. All rights reserved.</p>
    </footer>
    )}

export default Footer