import React from 'react'

class SignUp extends React.Component 
{
    state = {
        email: "",
        password: ""
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
      
    render() 
    {
        
        return (
            <div>
        
              <form onSubmit={this.handleSubmit}>
                  <h3>Sign In</h3>
                  <label htmlFor = "email">Enter email</label>
                  <input type = "email" id = "email" onChange = {this.handleChange}/>
                  <label htmlFor = "password">Enter password</label>
                  <input type = "password" id = "password" onChange = {this.handleChange}/>
                  <label htmlFor = "interest">Enter your Interests </label>
                  <input type = "text" id = "interest" onChange = {this.handleChange}/>
                  <label htmlFor = "gender">Enter your Gender </label>
                  <input type = "text" id = "gender" onChange = {this.handleChange}/>
                  <label htmlFor = "age">Enter your Age </label>
                  <input type = "date" id = "age" onChange = {this.handleChange}/>
                  <label htmlFor = "about">Somthing about you </label>
                  <textarea type = "text" id = "about" onChange = {this.handleChange}/>
                  <input type = "submit" />
              </form> 
            </div>
        )
    }
}

export default SignUp
