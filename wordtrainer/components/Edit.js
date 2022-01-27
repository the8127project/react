import React, {UseEffect, useState, useRef, Component, createContext, useContext} from "react"
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
import {backendQuestionAnswer, backendSubmitNext, backendChangeLesson, fliponce, submitResult, submitUpdate} from "./QuestionAnswer"


class EditWord extends Component  {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChangeTopic = this.handleChangeTopic.bind(this);
    this.handleChangeLesson = this.handleChangeLesson.bind(this);
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    
  static contextType = UserContext;
  componentDidMount() { 
   //   const user = this.context  
   //   this.state.value = user.question
                      }
  
   handleChangeTopic (event) {
    const user = this.context  
    user.setTopic(event.target.value);  
 //   this.setState({value: event.target.value});
  }

    
   handleChangeLesson (event) {
    const user = this.context  
    user.setLesson(event.target.value);  
 //   this.setState({value: event.target.value});
  }

    
   handleChangeQuestion (event) {
    const user = this.context  
    user.setQuestion(event.target.value);  
 //   this.setState({value: event.target.value});
  }

    
   handleChangeAnswer (event) {
    const user = this.context  
    user.setAnswer(event.target.value);  
 //   this.setState({value: event.target.value});
  }
    
    
  handleSubmit (event)  {
  const user = this.context  
  console.log(this.state.value)
  submitUpdate(user)
                         }
  render() { const user = this.context
    return ( <div> 
             Id:
             {user.id}
             Topic
              <input className="entry_typesubmit1" type="text" id="lesson" name="answer" onChange={this.handleChangeTopic} value={user.topic}></input>     Lesson 
              <input className="entry_typesubmit2" type="text" id="topic" name="answer" onChange={this.handleChangeLesson} value={user.lesson}></input>     Question 
              <input className="entry_typesubmit3" type="text" id="question" name="answer" onChange={this.handleChangeQuestion} value={user.question}></input>     Answer
              <input className="entry_typesubmit4" type="text" id="answer" name="answer" onChange={this.handleChangeAnswer} value={user.answer}></input>
    
              <button className="btn_typesubmit" onClick={this.handleSubmit}>Submit</button>
            </div> )
           }

}    



function Edit() {
    return (
       <Page title="About Us" wide={false}> 
         
      <h2>Edit</h2>
       <EditWord/>  
    </Page>
        )
    
}

export default Edit
