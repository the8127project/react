import React, {UseEffect, useState, useRef, Component, createContext, useContext} from "react"
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
import {backendQuestionAnswer, backendSubmitNext, backendChangeLesson, fliponce, submitResult} from "./QuestionAnswer"


class ResultList extends Component  {
      
     
    state = {
    posts: [],
    isLoading: true,
    error: null,
          };
  
  static contextType = UserContext;

  getLessonListInfo() {
    Axios('http://192.168.0.100:9080//json/result')
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
     
                         }
    
  render() {
    const { isLoading, posts } = this.state;
    const user = this.context                         
                              
      if (isLoading) return ( <div>Loading .....</div>)
              else { //user.setName('Tjasdfjs')
                     return ( <div>Results: 
                              <table>
                                <thead>
                                    <th>Id</th>
                                    <th>Date of Training</th>
                                    <th>Lesson</th>
                                    <th>Question</th>
                                    <th>Answer</th>
                                    <th>Count wrong</th>
                                </thead>

                             { posts.map((posting) => { return ( <tbody><td>{posting.uniqueid}</td><td>{posting.date_of_training}</td><td>{posting.lesson}</td><td>{posting.question}</td><td>{posting.answer}</td><td>{posting.count}</td></tbody> 
                                                               ) 
                                                      })
                             }
                            </table></div>
                         )
                   }     
          }

}

class Result extends Component {
   render() { return (
       <Page title="Result" wide={false}> 
         
       <ResultList/>
    </Page>
        )}
    
}

export default Result
