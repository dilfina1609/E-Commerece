import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
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

    axios.post('http://localhost:8080/login', 
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
          email:"",
          password:"",
        }
      })
      navigate('/')
    })
    .catch(error => console.log('error data', error))
  }


  return (
    <section className='home-wrapper-1 py-5'>
      <div className='container'>
        <form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name='email'
              className="form-control"
              value={state.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name='password'
              value={state.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <div class="row">
            <div class="col d-flex justify-content-start">
              <Link
                to='/signup'
              >
                <p className="forgot-password text-right">
                  Register as new User
                </p>
              </Link>
            </div>
            <div class="col d-flex justify-content-end">
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
