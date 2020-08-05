import React  from 'react';
const formValid = formErrors =>{
    let valid =true;
    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });
}

class SignIn extends React.Component 
{
    constructor(props)

    {
        super(props);
        this.state = {
            email: "",
            password: "",
            warning: "",
            
        }

    }
   
    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
           [event.target.id]: event.target.value
     
        });
    }
    
    handleSubmit = (event) =>{
      event.preventDefault();
      if (this.state.email === "")
      {
        
        document.querySelector("#warning").innerHTML = "cant be empty";
      }
      
      console.log(this.state);
      
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