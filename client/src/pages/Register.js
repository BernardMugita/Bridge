import React from 'react'
import Axios from 'axios';
import loginImage from '../Resources/loginImage.jpg';
import '../Styles/Register.css'
import {useState} from 'react';


function Register() {

    const [firstnameReg, setFirstnameReg] = useState("");
    const [secondnameReg, setSecondnameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const Register = () => {
            Axios.post("http://localhost:3001/Register", {
                firstName: firstnameReg, 
                SecondName: secondnameReg,
                userName: usernameReg,
                Password: passwordReg,
                }).then ((response) => {
                    alert("User Registered Successfully");
        });
    
    };

    return (
        <div>
             <div className="Register" style={{ backgroundImage: `url(${loginImage})`}}>

                <div className="RegForm">
                    <h1>REGISTER AS A NEW USER</h1>
                    <form>
                    <label htmlFor="firstName">First name</label>
                        <input name="name" placeholder="Enter first name" type="text" required 
                            onChange={(e) => {
                                setFirstnameReg(e.target.value);
                            }}
                        />
                    <label htmlFor="secondName">Second name</label>
                        <input name="name" placeholder="Enter second name" type="text" required 
                            onChange={(e) => {
                                setSecondnameReg(e.target.value);
                            }}
                        />
                    <label htmlFor="name">Username</label>
                        <input name="name" placeholder="Enter Username" type="text" required 
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}
                        />

                    <label htmlFor="Password">Password</label>
                        <input name="Password" placeholder="Enter Password" type="password" required
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        />

                        <button onClick={Register}>Register</button>
                    </form>
                </div>
        </div>
        </div>
    )
}


export default Register
