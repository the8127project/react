import React, {UseEffect, useState, useRef, Component, createContext, useContext} from 'react'
import {Link} from 'react-router-dom'
import stringify from "react"
import { renderToString} from 'react-dom/server'
import {UserProvider, UserContext, Counter} from './UserContext'
import Axios from "axios"
import {backendQuestionAnswer, backendSubmitNext, backendChangeLesson} from "./QuestionAnswer"

class LessonList extends Component  {
       
     
    state = {
    posts: [],
    isLoading: true,
    error: null,
          };
  
  static contextType = UserContext;

  getLessonListInfo() {
    Axios('http://192.168.0.100:9080/json/lessons')
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
    this.getLessonListInfo();
    const user = this.context
    user.setCounter(parseInt(user.counter)+1)
    //user.setName('updated')
     
                      }
  
  handleChange = (e) => {
     console.log(e.target.value); 
     const user= this.context
     backendChangeLesson(e.target.value, user) 
     .then(backendQuestionAnswer(user))
      
                         }
    
  render() {
    const { isLoading, posts } = this.state;
    const user = this.context                         
                              
      if (isLoading) return ( <div>Loading .....</div>)
              else { //user.setName('Tjasdfjs')
                     return ( <div>Lesson:  <select name='lessons' id='lessons'  onChange={this.handleChange}>
                             {  posts.map((posting) => { 
                                      return ( <option value = {posting.value} key={posting.value} > {posting.label}  </option> )
                                                       })
                             }
                            </select> </div>
                         )
                   }     
          }

}

class FlipQuestionAnswer extends Component  {
    
  static contextType = UserContext;

  componentDidMount() {
                      }

  handleChange = (e) => {
     const user = this.context  
//     console.log(e.target.value); 
     if (e.target.value == 'Question') user.setQuestionmode('true')
         else user.setQuestionmode('false')
     user.setOnetimeflip('false')
//     if(((user.questionmode=='true') ^ (user.onetimeflip=='false')) == 0) 
//         user.setCombined('false')
//     else user.setCombined('true')
//     console.log(user.questionmode)
//     const user= this.context
//     backendChangeLesson(e.target.value, user) 
//     .then(backendQuestionAnswer(user))
     
                         }
    
  render() {
    const user = this.context                         
    return (  
        <form>
          <fieldset onChange={this.handleChange}>   
            <input type="radio" id="question" name="flipmode" value="Question" defaultChecked></input>
            <label htmlFor="question">   Question</label> 
            <input type="radio" id="answer" name="flipmode" value="Answer"></input>
            <label htmlFor="answer">   Answer</label>
          </fieldset>
        </form>
           ) 
          }

      
}



function Header() {
 return (
      <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
       <div className="app-title">WordTrainer</div>
        <div className="header-dropdown"><LessonList/> </div>
        <div className="header-flipmode"><FlipQuestionAnswer/> </div>
      </div>
    </header>
     
     )
}

    
export default Header 
