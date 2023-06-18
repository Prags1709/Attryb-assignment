import React, {useState, useEffect} from "react";

const discription = [
    "Test drive Available",
    "Transmission manual",
    "fule Petrol",
    "location sector-45",
    "Insurance type comprehensive"
]

const AddCar=()=>{
    const [userID, setUserid] = useState(localStorage.getItem("userid"))
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [kilometer, setKilometer] = useState("");
    const [scartchs, setScartch] = useState("");
    const [color, setColor] = useState("");
    const [noOfAccidents, setNoAcc] = useState("");
    const [noOfPreviousBuyers, setBuyetCount] = useState("");
    const [registrationPlace, setRegist] = useState("");
    const [error, setError] = useState("");

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleImageChange = (e)=>{
        setImage(e.target.value)
    }

    const handleDistenceChange = (e)=>{
        setKilometer(e.target.value)
    }

    const handleScartchsChange = (e)=>{
        setScartch(e.target.value)
    }

    const handleColorChange =(e)=>{
        setColor(e.target.value)
    }

    const handleAccChange=(e)=>{
        setNoAcc(e.target.value)
    }

    const handleBuyChange=(e) =>{
        setBuyetCount(e.target.value)
    }

    const handleRegistrationChange = (e)=>{
        setRegist(e.target.value)
    }

    const dataSubmit = async (event)=>{
        event.preventDefault();

        setError("");

    if(image && title && kilometer && scartchs && color 
        && noOfAccidents && noOfPreviousBuyers && registrationPlace){
            try {
                const res = await fetch(`https://nutty-blue-school-uniform.cyclic.app/car/addCar`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        userID, 
                        image, 
                        title, 
                        discription,
                        kilometer,
                        scartchs,
                        color,
                        noOfAccidents,
                        noOfPreviousBuyers,
                        registrationPlace
                    }),
                });
    
                if(res.ok){
                    alert('Car data has been created successful');
                    setTitle("");
                    setImage("");
                    setKilometer("");
                    setScartch("");
                    setColor("");
                    setNoAcc("");
                    setBuyetCount("");
                    setRegist("");
                }else{
                    alert('Invalid credentials, Please Login')
                }
            } catch (error) {
                setError(error.message);
            }
        }else{
            window.alert('Please fill in all the details');
        }    
        
    }

    return (
        <div className="AddCar">
            <h2>ADD CAR PAGE</h2>
            {error && <p>{error}</p>}
            <form onSubmit={dataSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>Add Image Link:</label><br />
                    <input type="url" value={image} onChange={handleImageChange} />
                </div>
                <div>
                    <label>Distence in KM:</label><br />
                    <input type="text" value={kilometer} onChange={handleDistenceChange} />
                </div>
                <div>
                    <label>scartchs:</label><br />
                    <input type="text" value={scartchs} onChange={handleScartchsChange} />
                </div>
                <div>
                    <label>Color:</label><br />
                    <input type="text" value={color} onChange={handleColorChange} />
                </div>
                <div>
                    <label>Number Of Accident:</label><br />
                    <input type="number" value={noOfAccidents} onChange={handleAccChange} />
                </div>
                <div>
                    <label>Number Of Previous Buyers:</label><br />
                    <input type="number" value={noOfPreviousBuyers} onChange={handleBuyChange} />
                </div>
                <div>
                    <label>Registration Place:</label><br />
                    <input type="text" value={registrationPlace} onChange={handleRegistrationChange} />
                </div>
                <button className="sub" type="submit">Login</button>
            </form>
        </div>
    )
}

export default AddCar;