import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext()


export const Counter = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Counter</strong>: {user.counter}
      </h2>
    </div>
  );
};  
   
  

// This context provider is passed to any component requiring the context
export  const UserProvider = ({ children }) => {
  //const [name, setName] = useState("William");
  //const [location, setLocation] = useState("Mars");
  const [counter, setCounter] = useState('1');
  const [countright, setCountright] = useState('1');
  const [countwrong, setCountwrong] = useState('1');
  const [name, setName] = useState ('unknown');
  const [lesson, setLesson] = useState('unknown')
  const [topic, setTopic] = useState('unknown')
  const [question, setQuestion] = useState('unknown')
  const [answer, setAnswer] = useState('unknown')
  const [flipmode, setFlipmode] = useState('true')
  const [onetimeflip, setOnetimeflip] = useState('false')
  const [color, setColor] = useState('white')
  const [questionmode, setQuestionmode] = useState('true')
  const [nextmode, setNextmode] = useState('true')
  const [id, setId] = useState('unknown')
  return (
    <UserContext.Provider
      value={{
        counter,setCounter,
        countright, setCountright,
        countwrong, setCountwrong,
        name, setName,
        lesson, setLesson,
        topic, setTopic,
        question, setQuestion,
        answer, setAnswer,
        flipmode, setFlipmode,
        onetimeflip, setOnetimeflip,
        color, setColor,
        questionmode, setQuestionmode,
        nextmode, setNextmode,
        id, setId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

//export default {UserProvider, UserContext}