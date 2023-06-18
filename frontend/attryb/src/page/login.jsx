import React, { useState, useEffect } from "react";
//import { useHistory } from 'react-router-dom';

const Login = () => {
    //const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    };

    const dataSubmit = async (event)=>{
        event.preventDefault();

        setError("");

        try {
            const res = await fetch(`http://localhost:4000/user/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if(res.ok){
                alert('Login successful');
                setEmail("");
                setPassword("");
                const data = await res.json();
                const token = data.token;

                localStorage.setItem("token", token);
                window.location.href = "/";
            }else{
                alert('Invalid credentials')
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="login-box">
            <h2>LOGIN PAGE</h2>
            {error && <p>{error}</p>}
            <form onSubmit={dataSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;