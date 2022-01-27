import React, {UseEffect, useState, Component} from "react"
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
/*import ReactTable from 'react-table-6';*/
/*import 'react-table-6/react-table.css';*/
/*import dbconnection from "./dbconnection" */

class LessonList extends Component {
  state = {
    posts: [],
    isLoading: true,
    error: null,
  };

  getLessonListInfo() {
    Axios('http://192.168.0.100:9080/json/lessons')
      .then(response => {
        const posts = JSON.stringify(response.data);
        console.log(posts);
        /*const lessons = data1;
        const posts = "hallo "
        for (const lesson of lessons) {   
            post3s = lesson
            console.log(lesson);
         }*/
        this.setState({
          posts,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getLessonListInfo();
  }
  render() {
    const { isLoading, posts } = this.state;
  return (
    <div>
      <h2>Artist Web Service</h2>
      {!isLoading ? (posts):(
          <p>Loading .....</p>
        )}
    </div>
    );
  }
}



let fruits =  [{ label: "..waiting.. ", value: ".." }];


function myFunction() {
}

function getLessonsdummy() 
        {
          let test = Axios.get('http://192.168.0.100:9080/greeting/hug')
           .then((response) => {
                               console.log(response.data);
                               console.log(response.status);
                               console.log(response.statusText);
                               console.log(response.headers);
                               console.log(response.config);
                               alert(response.data);
                               var fruits =  [{ label: "..filling.. ", value: ".." }];
                               }    
           
                );
            
        } 
    
    
function getLessons() 
        {
          let test = Axios.get('http://192.168.0.100:9080/json/lessons')
           .then((response) => {
                               console.log(response.data);
                               console.log(response.status);
                               console.log(response.statusText);
                               console.log(response.headers);
                               console.log(response.config);
                               alert(response.data);
                               /*let fruits =  response.data;*/
                               }    
           
                );
            
        } 


function App() {

    
   /*let result = getLessons()*/
    /*alert(result);*/
    
  /*  let jsonlessons = [
    { "label": "Apple", "value": "1" },
    { "label": "Banana", "value": "2" },
    { "label": "Orange", "value": "3" }] */
    
 /* alert("hallo1");  */
 /* const test = Axios.get('http://192.168.0.100:9080/greeting/hug')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    teststr = response.data;
  });  */
  /*alert(test.data);*/
  console.log("==============================");
/*  Axios.get('http://192.168.0.100:9080/json/lessons')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    jsonlessons= JSON.stringify(response.data);
  });  */
  console.log("==============================");
  /*jsonlessons= JSON.stringify(response.data);*/
  /*console.log(Axios.get('http://192.168.0.100:9080/greeting/hug'));*/
  console.log("==============================");
 /*  } return(JSON.stringify(response.data));*/
  /*console.log("Test");*/
  /*alert("hallo");*/
  /*let jsonlessons = fetch('http://192.168.0.100:9080/json/lessons')
        .then(res => res.json())
        .then(res => {
            this.setState({
                ...this.state, // Not required but just a heads up on using mutation
                posts: res
            })
        })
        .catch((error => {
            console.error(error);
        }))*/
  
  //alert(fetch('http://192.168.0.100:9080/greeting/hug')); 
  // Array of objects containing our fruit data
/*  let fruits = getLessons();
  alert(stringify(fruits));*/
      
/*      let fruits =[
      
    { label: "Apple", value: "🍎" },
    { label: "Banana", value: "🍌" },
    { label: "Orange", value: "🍊" }
    ] */
 /* let fruits =  [{ label: "..waiting.. ", value: ".." }];*/
// Using state to keep track of what the selected fruit is
let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️")

// Using this function to update the state of fruit
// whenever a new option is selected from the dropdown
let handleFruitChange = (e) => {
  setFruit(e.target.value)
}

  return (
    <div className="App">
    {/* Displaying the value of fruit */}
    {fruit}
    <br />

    <select onChange={handleFruitChange}> 
      <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {fruits.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)}
    </select>
    </div>
  );
}


function HomeGuest() {
  async function handleSubmit(e) {
     e.preventDefault()
     //alert("Hello")
     try { 
          await  Axios.post("http://192.168.0.100:5082/register", {username: "Chris3", email: "email3@testmail.com", password: "asdfajsdflak123"})
          console.log("User successfully created")
     } catch(e) {
          console.log("There was a problem")
     }  }  
  return(
    <Page wide={true} title="Welcome">
      
      <LessonList/>
      <App/>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">ARE you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up for Wordtrainer
            </button>
          </form>
        </div>
    </div>
    </Page>
)}

export default HomeGuest