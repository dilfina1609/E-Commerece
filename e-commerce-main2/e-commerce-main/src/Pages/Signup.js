import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Signup = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    cartData: {}
  })
  const navigate = useNavigate();

  const handleChange =(e)=>{
    console.log('input value', e.target.name, e.target.value)
    setState((state)=>{
      return{
        ...state,
        [e.target.name]: e.target.value
      }
    })
  }


  const handleSubmit=(e)=>{

    e.preventDefault()

    axios.post('http://localhost:8080/register',
    state,
    {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(result => {
      console.log('results', result)
      setState((state)=>{
        return {
          ...state,
          name:"",
          email:"",
          password:"",
  
        }
      })
      navigate('/login')
    })
    .catch(error => console.log('error data', error))
  }


  return (
    <section className='home-wrapper-1 py-5'>
    <div className='container'>
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name='name'
          className="form-control"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name='email'
          value={state.email}
          className="form-control"
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name='password'
          className="form-control"
          value={state.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
    </div>
    </section>
  )
}
