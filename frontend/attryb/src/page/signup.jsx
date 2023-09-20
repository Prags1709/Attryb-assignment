import React, { useState, useEffect } from "react";

const Siginup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNo(e.target.value)
    }

    const handleRoleChange = (e)=>{
        setRole(e.target.value);
    }

    const dataSubmit = async (event) => {
        event.preventDefault();

        setError("");

        if (name && email && password && phoneNo && role) {
            try {
                const res = await fetch(`https://repulsive-outfit-frog.cyclic.cloud/user/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password, phoneNo, role }),
                });

                if (!res.ok) {
                    alert('Invalid credentials')
                } else {
                    alert('User Signup successful');
                    setName("");
                    setEmail("");
                    setPassword("");
                    setPhoneNo("");
                    setRole("")
                    window.location.href = "/login";
                }

            } catch (error) {
                setError(error.message);
            }
        } else {
            window.alert('Please fill in all the details');
        }
    }

    return (
        <div className="signup-box">
            <h2>SIGNUP PAGE</h2>
            {error && <p>{error}</p>}
            <form onSubmit={dataSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>Phone Number:</label><br />
                    <input type="number" value={phoneNo} onChange={handlePhoneNumberChange} />
                </div>
                <div>
                    <label>User Role:</label><br />
                    <select className="role-box" value={role} onChange={handleRoleChange}>
                        <option value="">Select User Role</option>
                        <option value="buyer">Buyer</option>
                        <option value="dealer">Dealer</option>
                    </select>
                </div>
                <button className="sub" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Siginup;