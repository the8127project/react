import React, {UseEffect, useState, useRef, Component, createContext, useContext} from "react"
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
import {backendQuestionAnswer, backendSubmitNext, backendChangeLesson} from "./QuestionAnswer"
         
       

class QuestionAnswer extends Component  {
  static contextType = UserContext;
   state = {
    isLoading: true
          };
   getQuestionAnswerInfo() {
     const user = this.context
     backendQuestionAnswer(user)
     this.setState({  isLoading: false     });
      }
   componentDidMount() {
   this.getQuestionAnswerInfo();
                      }
   handleChange = (e) => {
    this.getQuestionAnswerInfo();
    //this.forceUpdate();
    log.console = ('reload words');  
                      }
      
   render() {
    const { isLoading/*, posts*/ } = this.state;
    const user = this.context;
    if (isLoading) return ( <p>Loading .....</p>)
              else { /*if (user.questionmode=='true')  
                          return ( <div className='question' onChange={this.handleChange}> {user.answer}  </div> )  
                     else return ( <div className='question' onChange={this.handleChange}> {user.question}  </div> )*/
                      return ( <div className='question' onChange={this.handleChange}> {user.answer}  </div>
                             )
                }         
                             
          }
  
}  

/*<button className="btn btn-success btn-sm" onClick={this.handleChange}>Next</button> */

class SubmitNext extends Component  {
  static contextType = UserContext;
  
  postSubmitNext() {
     const user = this.context
     backendSubmitNext(user)
                   }
  componentDidMount() {
                      }
  handleChange = (e) => {
    const user = this.context
    console.log('submit next');  
    this.postSubmitNext()
    console.log(user.question)  
      
                         }
  render() {
    return ( <button className="btn_sub" onClick={this.handleChange}>Next</button> )
          }

}
            
         


function HomeGuest() {
 //  const [refresh, setRefresh]= useState();
   
//   const isRefresh= ({ isRefresh }) => 'no'; 

//    <Page wide={true} title="Welcome">
//</Page>

    
  return(
     <Page wide={true} title="Welcome">
     <div className="card">
        <div className="row align-items-center">
            <div className="col-lg-7 py-3 py-md-5">
              <QuestionAnswer/>
              <SubmitNext/>
              <p className="lead text-muted"></p>
            </div>
            <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          
            </div>
        </div>  
    </div>
    </Page>
  
)}

export default HomeGuest