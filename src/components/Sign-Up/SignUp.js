import React from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { UPDATE_USERS, updatePosts } from "../../actions/social-media-app";

const initialState  = {
        
    name:"",
    email: "",
    password: "",
    passwordConfirmation:"",
    registrationErrors:"",
    interests:{},
    gender:"",
    age:""
    }

class SignUp extends React.Component 
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
                
                userExists = true;
            }

        }
        if (userExists == true){
            
            document.querySelector("#emailWarning").innerHTML = "This email already exists";
        }
        
        else if(this.state.email.trim === "" || this.state.name.trim === "" 
        || this.state.password.trim === "" ||this.state.password !== 
        this.state.passwordConfirmation || this.state.gender.trim === "")
        {
            
            if (this.state.name.trim === ""){
                document.querySelector("#nameWarning").innerHTML = "Name can not be blank";

            }
            else {
                document.querySelector("#nameWarning").innerHTML = "";
            }
            if (this.state.password.trim === ""){
                document.querySelector("#passwordWarning").innerHTML = "password can not be blank";

            }
            else{
                document.querySelector("#passwordWarning").innerHTML = "";
            }
            if (this.state.password.trim !== this.state.passwordConfirmation){
                document.querySelector("#passwordConfirmationWarning").innerHTML = "Password doesn't match";

            }
            else{
                document.querySelector("#passwordConfirmationWarning").innerHTML = "";
            }
            if (this.state.gender.trim === ""){
                document.querySelector("#genderWarning").innerHTML = "Please pick your gender";

            }
            else {
                document.querySelector("#genderWarning").innerHTML = "";
            }

        }
        
        else{

            document.querySelector("#emailWarning").innerHTML = "";
            this.setState(initialState);
            listOfUsers.push(user);

        }
        
        
        axios.put('https://jsonstorage.net/api/items/4d56c6a1-9bd8-4795-b714-8b6e815d2edd', {"users":listOfUsers} )
        
        .then(response  =>{
           
            console.log(response);
            console.log(response.data);
           // this.props.dispatch(updatePosts[listOfUsers]);       

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
                  <div id="emailWarning"></div>
                  <label htmlFor = "email">Enter email</label>
                  <input type = "email" id = "email" value = {this.state.email} 
                  onChange = {this.handleChange} />
                  <div id="passwordWarning"></div>
                  <label htmlFor = "password">Enter password</label>
                  <input type = "password" id = "password" value = {this.state.password} 
                  onChange = {this.handleChange} />
                  <div id="passwordConfirmationWarning"></div>
                  <label htmlFor = "passwordConfirmation">Confirm Password</label>
                  <input type = "password" id = "passwordConfirmation" value = {this.state.passwordConfirmation} 
                  onChange = {this.handleChange} />
                  <label htmlFor = "interests">Enter your Interests </label>
                  <input type = "text" id = "interests" value = {this.state.interests}
                   onChange = {this.handleChange}/>
                   <div id="genderWarning"></div>
                  <label htmlFor = "gender">Enter your Gender </label>
                  <select id = "gender" value = {this.state.gender} onChange = {this.handleChange} >
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
