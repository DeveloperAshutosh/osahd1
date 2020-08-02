import React  from 'react';

const formValid = formErrors =>{
    let valid =true;
    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });
}

class SignIn extends React.Component 
{
    state = {
        email: "",
        password: "",
        warning: "",
        formErrors:{
            email: '',
            password:""

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
        if(formValid(this.state.formErrors))
        {
            console.log(this.state);
        }
        else 
        {
            document.querySelector("#warninge").innerHTML = "email cant be empty";
            document.querySelector("#warningp").innerHTML = "Password cant be empty";  
        }
       
        console.log(this.state);
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
                  <div id = "warninge" onSubmit= {this.handleSubmit}  ></div>
                  <input type = "email" id = "email" onChange = {this.handleChange}/>
                  <label htmlFor = "password">Enter password</label>
                  <div id = "warningp" onSubmit= {this.handleSubmit}  ></div>
                  <input type = "password" id = "password" onChange = {this.handleChange}/>
                  <input type = "submit" onSubmit ={this.handleSubmit} />
              </form>  
            </div>
        )
    }
}

export default SignIn;