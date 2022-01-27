import React, {UseEffect, useState, Component} from "react"
import { renderToString} from 'react-dom/server'
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
import stringify from "react"
/*import ReactTable from 'react-table-6';*/
/*import 'react-table-6/react-table.css';*/
/*import dbconnection from "./dbconnection" */


function axiosTest() {
    // create a promise for the axios request
    const promise = Axios.get('http://192.168.0.100:9080/json/lessons')

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    // return it
    return dataPromise
  /*  let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️")
    {dataPromise.map((dataProm) => <option value={dataProm.value}>{dataProm.label}</option>)}*/
}

// now we can use that data from the outside!
/*axiosTest()
    .then(data => {
        response.json({ message: 'Request received!', data })
    })
    .catch(err => console.log(err))
*/
/*

function Lesson1 () {
   const state = {
    post1: [],
    isLoading: true,
    error: null,
  };

    
  Axios('http://192.168.0.100:9080/json/lessons')
      .then(response => {
       const post1 = JSON.stringify(response.data);
       this.setState({
                          posts1,
                          isLoading: false
                      });
                        })
    
     .catch(error => this.setState({ error, isLoading: false }));
    const { isLoading, post1 } = this.state;
    return(post1)
    }
*/

class LessonList extends Component  {
  state = {
    posts: [],
    isLoading: true,
    error: null,
          };

  getLessonListInfo() {
    Axios('http://192.168.0.100:9080/json/lessons')
      .then(response => {
     const posts = JSON.parse(JSON.stringify(response.data));  
      /*  JsonArray posts = new JsonArray(response.data); */
    /*  const posts = JSON.parse(response.data); */
       
    /*    response.data */
     /*   [{"label":"Apple","value":"1"},{"label":"Banana","value":"2"},{"label":"Orange","value":"3"}]*/
        
     /*   console.log(posts);*/
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
                             
                              
      if (isLoading) return ( <p>Loading .....</p>)
              else return ( <select name='lessons' id='lessons'>   
                             {                     
                                posts.map((posting) => { return ( <option value = { posting.value} > {posting.label}  </option> ) })
                             
                             }
                             
                          
                              </select> 
                             
                             )
                             
                             
          }

}
  

/* <select name='lessons' id='lessons'>   */
                            /* <p> test */
                         /*    posts[0].label*/
                           /*  posts.map((posting) => { <option value={posting.value}> {posting.label} </option>})*/
                        /*     posts.map((posting) => { return ( 'test' + posting.label + 'Test')} )*/
                         /*    posts.map((posting) =>  <option value=posting.value> posting.label </option>)*/
                             

                          /*  dangerouslySetInnerHTML = 
                             { posts.map((posting) => { <option value={posting.value}> {posting.label} </option>})}
                           <select name='lessons' id='lessons'>  
                           </select>  */

/*  for (let post of posts)  {a = a + "<option value="+post.value+">"+post.label+"</option>)"}*/
    
     /*   for (let post of posts) {<option value={post.value}> {post.label} </option>}*/
      /*
  return (
      <div>
      {!isLoading ? (JSON.stringify(posts[0])
      posts[0].label
      Array.isArray(posts)*/
       
     /* posts */
       
   /*    for (let post of posts) {post}*/
 /*     { posts.map(post) => {post.value} {post.label}}*/
       /* posts 
     <select name="lessons" id="lessons">
             <option value="volvo">Volvw2o</option>
             <option value="saab">Saab</option>
             <option value="mercedes">Mercedes</option>
             <option value="audi">Audi</option>
          {posts.map((post) => <option value={post.value}>{post.label}</option>)}
       </select>
       
       ):(
          <p>Loading .....</p>
        )}
      </div> */
        




 function DropDown() {
 /*let fruits =  [
      
    { label: "Apple", value: "🍎" },
    { label: "Banana", value: "🍌" },
    { label: "Orange", value: "🍊" }
    ]*/
    let fruits3 = <LessonList/>;
    
    let fruits2 = '[{"label":"Apple","value":"1"},{"label":"Banana","value":"2"},{"label":"Orange","value":"3"}]'
    
    
        
    
    let result1 = 
        axiosTest()
    .then(data => {
        response.json({ message: 'Request received!', data })
        console.log('********1a*******')
        console.log(data)
    })
    .catch(err => console.log(err))
    
  /*  while (result1.message !=   'Request received!')  
    { 
      setTimeout(() => { console.log(result1.message); }, 2000);
    }
    */
    console.log('********1*******')
    console.log(result1)
    
     
  
     
    console.log('********1b******')
    console.log(axiosTest())
 
    
    console.log('********3*******')
    console.log(fruits3)
    console.log('********2*******')
    console.log(fruits2)
    
    let fruits = JSON.parse(fruits2)
   /* console.log(fruits2[0])
    for (const fruit of fruits2) {fruits.push(JSON.parse(fruit))}                      
  */
 /* let fruits =  [{ label: "..waiting.. ", value: ".." }];*/
// Using state to keep track of what the selected fruit is
let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️")

// Using this function to update the state of fruit
// whenever a new option is selected from the dropdown
let handleFruitChange = (e) => {
  setFruit(e.target.value)
}

  return (
    <div className="DropDown">
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
           /* <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block"> */
              Sign up for Wordtrainer
            </button>
          </form>
        </div>
    </div>
    </Page>
)}

export default HomeGuest