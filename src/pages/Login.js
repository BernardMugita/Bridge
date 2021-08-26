import React from 'react'
import loginImage from '../Resources/loginImage.jpg';
import '../Styles/Login.css'

function Login() {
    return (
        <div className="login" style={{ backgroundImage: `url(${loginImage})`}}>

                <div className="loginForm">
                    <h1>LOGIN FOR EXISTING USERS</h1>
                    <form>
                        <label htmlfor="name">Username</label>
                        <input name="name" placeholder="Enter Username" type="text" required/>

                        <label htmlfor="Password">Password</label>
                        <input name="Password" placeholder="Enter Password" type="password" required/>

                        <button type="submit">Login</button>
                    </form>
                </div>
        </div>
        
    )
}

export default Login
