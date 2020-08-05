import React from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { UPDATE_USERS, updatePosts } from "../../actions/social-media-app";

class SignUp extends React.Component 
{
    constructor(props)
    {
        super(props);
        
        this.state = {
        
        name:"",
        email: "",
        password: "",
        passwordConfirmation:"",
        registrationErrors:"",
        interests:{},
        gender:"",
        age:""
        }
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
        this.setState({
            [event.target.id]: event.target.value
            
        });
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        const   user = {

            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            interests: this.state.interests,
            gender: this.state.gender,
            age: this.state.age
        };
        const listOfUsers = this.state.users;
        let userExists = false;
        for (let newuser of this.state.users){
            console.log(user);
            if (newuser.email === this.state.email){
                return
                userExists = true;
            }

        }
        if (userExists == true){
            alert("runs");
            document.querySelector("#nameWarning").innerHTML = "This email already exists";
        }
        if(this.state.email=== ""){
            document.querySelector("#nameWarning").innerHTML = "cant be empty";
        }
        else{
            
            listOfUsers.push(user);

        }
        
        
        axios.put('https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd', {"users":listOfUsers} )
        
        .then(response  =>{
           
            console.log(response);
            console.log(response.data);
            //this.props.dispatch(updatePosts[listOfUsers]);       

        })
        
        
        console.log(this.state);
        
    }
      
    render() 
    {
        
        return (
            <div>
        
              <form  onSubmit= {this.handleSubmit} > 
              {this.getUsers()} 
                  <h3>Sign Up</h3>
                  <div id="nameWarning"></div>
                  <label htmlFor = "name">Enter Full name</label>
                  
                  <input type = "text" id = "name" value = {this.state.name} 
                  onChange = {this.handleChange} />
                  <label htmlFor = "email">Enter email</label>
                  <input type = "email" id = "email" value = {this.state.email} 
                  onChange = {this.handleChange} />
                  <label htmlFor = "password">Enter password</label>
                  <input type = "password" id = "password" value = {this.state.password} 
                  onChange = {this.handleChange} required/>
                  <label htmlFor = "passwordConfirmation">Confirm Password</label>
                  <input type = "password" id = "passwordConfirmation" value = {this.state.passwordConfirmation} 
                  onChange = {this.handleChange} required/>
                  <label htmlFor = "interests">Enter your Interests </label>
                  <input type = "text" id = "interests" value = {this.state.interests}
                   onChange = {this.handleChange}/>
                  <label htmlFor = "gender">Enter your Gender </label>
                  <select id = "gender" value = {this.state.gender} onChange = {this.handleChange}>
                     <option></option>
                     <option  >Male</option>
                     <option  >Female</option>

                  </select>
                  <label htmlFor = "age">Enter your Age </label>
                  <input type = "date" id = "age" value ={this.state.age}
                   onChange = {this.handleChange}/>
                  <button type = "submit" onSubmit = {this.handleSubmit}> Sign Up</button>
                  <p className = "logo"></p>
                  <p className = "#"> Share... Express...Connect...Your world closer together </p>
              </form> 
            </div>
        )
    }
    
}
function mapStateToProps(state) {
    return {
      store: state,
    };
  }
  

export default connect(mapStateToProps) (SignUp);
