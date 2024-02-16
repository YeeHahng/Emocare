import React, { useState }   from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import BannerImage from "./image/EMOTIONS.jpg"
import validation from './Signupvalidation';
import axios from "axios";

function Signup() {
  const[values, setValues] = useState({
    name: '',
    phonenumber:'',
    email: '',
    password:''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.name === "" && errors.phonenumber ==="" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));

    }
  }
  return (
    <div className='Signup'>
      <div className="signup-container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="signup-box">
      <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name"></label>
            <input type="name" id="name" name='name' onChange={handleInput} placeholder="Enter Name"/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="Phone Number"></label>
            <input type="phonenumber" id="phonenumber" name='phonenumber' onChange={handleInput} placeholder="Enter Phone number"/>
            {errors.phonenumber && <span className='text-danger'>{errors.phonenumber}</span>}
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" name='email' onChange={handleInput} placeholder="Enter Email"/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" id="password" name='password' onChange={handleInput} placeholder="Enter Password"/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type="submit">Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link to= "/">
          <button type="button" className="secondary-action">Log in</button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup