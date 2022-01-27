import React, {UseEffect, useState, useRef, Component, createContext, useContext} from "react"
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
import {backendQuestionAnswer, backendSubmitNext, backendChangeLesson, fliponce, submitResult} from "./QuestionAnswer"




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
  //  log.console = ('reload words');  
                      }
      
   render() {
    const { isLoading/*, posts*/ } = this.state;
    const user = this.context;
    
    //console.log("Logical: ", (user.questionmode=='true') ^ (user.onetimeflip=='false'))
    //console.log(user.question, user.answer)
    if (isLoading) return ( <p>Loading .....</p>)
              else { /*if (user.combined=='true')*/
                     if( (user.questionmode=='true') ^ (user.onetimeflip=='false'))
                          return ( <div className='question' onChange={this.handleChange}> {user.question}  </div> )  
                     else return ( <div className='question' onChange={this.handleChange}> {user.answer}  </div> )
                   }         
          }
}   

/*<button className="btn btn-success btn-sm" onClick={this.handleChange}>Next</button> */

class SubmitNext extends Component  {
  static contextType = UserContext;
  
     
  componentDidMount() {
                      }
  handleChange = () => {
   // console.log = ('reload words');  
     const user = this.context
    user.setOnetimeflip('false') 
    backendSubmitNext(user)
                         }
  render() {
    return ( <button className="btn_sub" onClick={this.handleChange}>Next</button> )
          }

} 

class Onetimeflip extends Component  {
  static contextType = UserContext;
  componentDidMount() {
                      }
  handleChange= () =>  {
  const user = this.context  
  fliponce(user)
                         }
  render() {
    return ( <button className="btn_flip" onClick={this.handleChange}>Flip</button> )
          }
 
} 
      
class TypeAnswer extends Component  {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    
  static contextType = UserContext;
  componentDidMount() {
                      }
  
   handleChange (event) {
    this.setState({value: event.target.value});
  }

    
  handleSubmit (event)  {
  const user = this.context  
  console.log(this.state.value)
  submitResult(user, this.state.value)
  this.state.setValue('')
                         }
  render() { 
    return ( <div> 
              <input className="entry_typesubmit" type="text" id="answer" autocapitalize="none" name="answer" onChange={this.handleChange} value={this.state.value}></input>
              <button className="btn_typesubmit" onClick={this.handleSubmit}>Submit</button>
            </div> )
           }

}    

// <label className="entry_typesubmit" for="answer">Answer</label>
// <p className="lead text-muted"></p>
// <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
//       </div>


class HomeGuest extends Component {
 //  const [refresh, setRefresh]= useState();
   
//   const isRefresh= ({ isRefresh }) => 'no'; 
  static contextType = UserContext;
  
render () { const user = this.context;
  return(
    
    <Page wide={true} title="Welcome">
      <div className="card" style={{backgroundColor: user.color}}>
        <div className="row align-items-center">
            <div className="col-lg-7 py-3 py-md-5">
              <QuestionAnswer/>
             
            </div>
        </div>
              <SubmitNext/>
              <Onetimeflip/>
              <TypeAnswer/>              
    </div>

              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>  
              <br/>
</Page>
  
)}
}

export default HomeGuest