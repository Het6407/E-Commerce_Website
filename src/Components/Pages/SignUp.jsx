import React from 'react'
import './Loginsignup.css'
import Header from '../header'

const SignUp = () => {
  return (
   <>
   <Header />
    <div class="wrapper">
    <div class="title">
       SignUp Form
    </div>
    <form action="#">
       <div class="field">
          <input type="text" required/>
          <label>Email Address</label>
       </div>
       <div class="field">
          <input type="password" required/>
          <label>Password</label>
       </div>
       <div class="field">
          <input type="password" required/>
          <label>Comfirm Password</label>
       </div>
     
       <div class="field">
          <input type="submit" value="Login"/>
       </div>
      
    </form>
 </div>
 </>
  )
}

export default SignUp
