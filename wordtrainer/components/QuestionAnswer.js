import React, {UseEffect, useState, useRef, Component, createContext, useContext} from "react"
import { renderToString} from 'react-dom/server'
import Axios from "axios"
import stringify from "react"
import {UserProvider, UserContext, Counter} from './UserContext'
    

export async function backendChangeLesson(lesson, user) {
     let payload = { lesson: lesson }
     await Axios.post('http://192.168.0.100:9080/json/lessons', payload)
       .then ( 
          //user.setCounter(parseInt(user.counter)+1) 
               backendQuestionAnswer(user)
             )
     return('success')  
}    

export async function submitResult(user, typedanswer) {
    if (user.questionmode == 'false') 
        if(user.answer ==  typedanswer)
            { console.log('right')
              user.setCountright(parseInt(user.countright)+1);
              await postWordRightWrong(user.id, 'true')
              await backendSubmitNext(user)
              
            }
        else 
            { console.log('wrong')
              user.setCountwrong(parseInt(user.countwrong)+1);
              //backendQuestionAnswer(user)
              postWordRightWrong(user.id, 'false') 
              user.setColor('#ffcccb');
              
            }
    else 
        if(user.question ==  typedanswer)
            { console.log('right')
              user.setCountright(parseInt(user.countright)+1);
              await postWordRightWrong(user.id, 'true')
              await backendSubmitNext(user)
            }
        else 
            { console.log('wrong')
              //backendQuestionAnswer(user)
              user.setCountwrong(parseInt(user.countwrong)+1); 
              user.setColor('#ffcccb');
              postWordRightWrong(user.id, 'false')
            }
        
    
    console.log (user.question, user.answer, typedanswer)
    return('success')    
   }

export async function postWordRightWrong(id, rightwrong) {
     let payload = { id: id, rightwrong: rightwrong }
     console.log(JSON.stringify(payload))
     await Axios.post('http://192.168.0.100:9080/json/word_rightwrong', payload)
     return('success')  
}    


export async function submitUpdate(user) {
     let payload = { id: user.id, topic: user.topic, lesson: user.lesson, question: user.question, answer: user.answer }
     console.log(JSON.stringify(payload))
     await Axios.post('http://192.168.0.100:9080/json/word_update', payload)
     return('success')  
}    

export async function fliponce(user) {
    if (user.onetimeflip == 'true')
            {user.setOnetimeflip('false') }
         else 
            {user.setOnetimeflip('true') }
    user.setQuestion(user.question);
    user.setAnswer(user.answer);
//   user.setQuestion(user.question);
//    user.setAnswer(user.answer);
    user.setCounter(parseInt(user.counter)+1);
    return('success')
}

export async function backendQuestionAnswer(user) {
    await Axios('http://192.168.0.100:9080/json/word')
      .then( response => 
             {const posts = JSON.parse(JSON.stringify(response.data));
             console.log('new words requested successful')     
             user.setName('Tim');
             user.setCounter(parseInt(user.counter)+1);
             console.log(posts.question)   
             user.setId(posts.id);
             user.setTopic(posts.topic);
             user.setLesson(posts.lesson);
             user.setQuestion(posts.question);
             user.setAnswer(posts.answer);
             user.setColor('white');
             })
    return('success')  
}         

export async function backendSubmitNext(user) {
    let payload = {next_word: user.mode}
    await Axios.post('http://192.168.0.100:9080/json/word_next', payload)
      .then(backendQuestionAnswer(user))
            
    return('success')  
}         
  
