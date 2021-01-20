import React, {useState} from 'react';
import './LoginForm.css';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state , setState] = useState({
        user : "",
        password : "",
        successMessage: null
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if(state.user === "John" && state.password === "12345") {
            redirectToHome("Column");
            props.showError(null)
        }
        else if(state.user === "MICKY" && state.password === "98765")
        {
            redirectToHome("Pie");
            props.showError(null)
        }
        else{
            props.showError("Username does not exists");
        }
    }

    const redirectToHome = (type) => {
        props.updateTitle(type)
        props.history.push('/home');
        
    }
    
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">User</label>
                    <input type="text" 
                        className="form-control" 
                        id="user" 
                        aria-describedby="userHelp" 
                        placeholder="Enter user" 
                        value={state.user}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
    )
}

export default withRouter(LoginForm);