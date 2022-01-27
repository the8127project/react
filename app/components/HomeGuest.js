import React, {UseEffect} from "react"
import Page from "./Page"
import Axios from "axios"
import Container from "./Container"
/*import dbconnection from "./dbconnection" */

function HomeGuest() {
  async function handleSubmit(e) {
     e.preventDefault()
      
     //alert("Hello")
     try { 
          await Axios.post("http://192.168.0.100:5082/register", {username: "Chris3", email: "email3@testmail.com", password: "asdfajsdflak123"})
          console.log("User successfully created")
     } catch(e) {
          console.log("There was a problem")
     }    
  }
  return (
    <Page wide={true} title="Welcome">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          
          <p className="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
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