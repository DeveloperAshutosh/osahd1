import React  from 'react';
import axios from 'axios';


const initialState = {
    email: "",
    password: "",
    warning: "",
    
}

class SignIn extends React.Component 
{
    constructor(props)

    {
        super(props);
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    getUsers()
    {
        axios.get('https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd')
        .then((response) =>{
            this.setState (response.data);

        });  
    }
   
    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
           [event.target.id]: event.target.value
     
        });
    }

    
    handleSubmit = (event) =>{
      event.preventDefault();
      const user  = {
          email: this.state.email,
          password:this.state.password
      } 
      let userExists =  false;
      let userMatched ;
      for (let user of this.state.users ){
          if(user.email === this.state.email){
              if(user.password === this.state.password){
                  userExists = true;
                  userMatched = user;
              }
          }
      }
      
    }
    render() 
    {
        return (
            <div>
               
                <button>Sign In</button>
              <form onSubmit={this.handleSubmit}>
                  <h3>Sign In</h3>
                  <label htmlFor = "email">Enter email</label>
                  <div id = "warning" onSubmit= {this.handleSubmit}  ></div>
                  <input type = "email" id = "email" value = {this.state.email}
                  onChange = {this.handleChange}/>
                  <label htmlFor = "password">Enter password</label>
                  <input type = "password" id = "password" value = {this.state.password}
                  onChange = {this.handleChange}/>
                  <button type = "submit" onSubmit ={this.handleSubmit} > Sign In </button>
                  <button type = "submit" onSubmit = {this.handleSubmit}> Sign Up</button>
                  <p className = "logo"></p>
                  <p className = "#"> Share... Express...Connect...Your world closer together </p>

              </form>  
            </div>
        )
    }
}

export default SignIn;