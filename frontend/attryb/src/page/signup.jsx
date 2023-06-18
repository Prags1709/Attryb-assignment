import React, {useState, useEffect} from "react";
//import { useHistory } from 'react-router-dom';

const Siginup=()=>{
    //const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e)=>{
        setName(e.target.value)
    };

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    };

    const handlePhoneNumberChange = (e)=>{
        setPhoneNo(e.target.value)
    }

    const dataSubmit = async (event)=>{
        event.preventDefault();

        setError("");

        try {
            const res = await fetch(`http://localhost:4000/user/signup`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, password, phoneNo}),
            });

            if(!res.ok){
                alert('Invalid credentials')
            }else{
                alert('User Signup successful');
                setName("");
                setEmail("");
                setPassword("");
                setPhoneNo("");
                window.location.href = "/login";
            }
            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="signup-box">
            <h2>SIGNUP PAGE</h2>
            {error && <p>{error}</p>}
            <form onSubmit={dataSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <label>Phone Number:</label>
                <input type="number" value={phoneNo} onChange={handlePhoneNumberChange} />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Siginup;