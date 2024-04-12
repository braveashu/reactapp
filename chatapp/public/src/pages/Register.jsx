import React from 'react'
import styled from 'styled-components';
function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Registered');
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
    };
  return( 
  <>
    <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}> 
            <div>
                <img src="https://via.placeholder.com/150" alt="logo" /> 
                <h1>forus</h1>
            </div>
            <input 
                type="text" 
                placeholder="Username" required 
                name="username" 
                onChange={(e) => handleChange(e)} 
            />
            <input 
                type="email" 
                placeholder="Email" required 
                name="email" 
                onChange={(e) => handleChange(e)} 
            />
            <input 
                type="password" 
                placeholder="Password" required 
                name="password" 
                onChange={(e) => handleChange(e)} 
            />
            <input 
                type="password" 
                placeholder="Confirm Password"  
                name="confirmPassword" 
                onChange={(e) => handleChange(e)} 
            />
            <button type='submit'>
                Register
            </button>
            <span>
                Already have an account? <a href="/login">Login</a>
            </span>
        </form>
    </FormContainer>
  </> 
  );
}

const FormContainer = styled.div``;


export default Register