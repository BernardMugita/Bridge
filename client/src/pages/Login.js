import React from 'react';
import loginImage from '../Resources/loginImage.jpg';
import '../Styles/Login.css';
import {Link} from "react-router-dom";
import { useState } from 'react';
import Axios from 'axios';

function Login() {

    const [UserName, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const Login = () => {
        Axios.post("http://localhost:3001/Login", {
            UserName: UserName,
            Password: Password,
            }).then ((response) => {
            console.log(response);
        }
    )};

    return (
        <div className="login" style={{ backgroundImage: `url(${loginImage})`}}>

                <div className="loginForm">
                    <h1>LOGIN FOR EXISTING USERS</h1>
                    <form>
                        <label htmlFor="name">Username</label>
                        <input name="name" placeholder="Enter Username" type="text" required
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />

                        <label htmlFor="Password">Password</label>
                        <input name="Password" placeholder="Enter Password" type="password" required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <button type="submit" onClick={Login}>Login</button><br/>
                            <Link to ="/Register"> Sign Up </Link>
                            <Link to ="/Profile"> Profiles </Link>
                    </form>
                </div>
        </div>
        
    )
}
export default Login
