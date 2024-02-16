import React, { useState } from 'react';
import './login.css';
import {Link} from "react-router-dom";
import validation from './Loginvalidation';
import BannerImage from "./image/EMOTIONS.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const[values, setValues] = useState({
    email: '',
    password:''
  })
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const navigate = useNavigate();
  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Sucess"){
          navigate('/home');
        }
        else{
          alert("email or password is incorrect!");
        }
      })
      .catch(err => console.log(err));

    }
  }
  return (
    <div className='Login'>
    <div className="login-container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="login-box">
      <h1>Sign In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Enter Email" name='email' onChange={handleInput}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Enter Password" name='password' onChange={handleInput}/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type="submit">Log in</button>
          <p>You agree to our terms and policies</p>
          <Link to="/Signup">
          <button type="button" className="secondary-action">Create Account</button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login;
