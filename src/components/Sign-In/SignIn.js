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
      if (this.email.state === "")
      {
        document.querySelector("#warning").innerHTML = "cant be empty";
      }
      
    }
    render() 
    {
        return (
            <div>
                <button>Sign in</button>
                <button>Sign up</button>
              <form onSubmit={this.handleSubmit}>
                  <h3>Sign In</h3>
                  <label htmlFor = "email">Enter email</label>
                  <div id = "warning" onSubmit= {this.handleSubmit}  ></div>
                  <input type = "email" id = "email" onChange = {this.handleChange}/>
                  <label htmlFor = "password">Enter password</label>
                  <input type = "password" id = "password" onChange = {this.handleChange}/>
                  <input type = "submit" onSubmit ={this.handleSubmit} />
              </form>  
            </div>
        )
    }
}

export default SignIn;