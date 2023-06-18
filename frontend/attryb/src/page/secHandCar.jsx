import React, {useState, useEffect} from "react";

const SecHandCar=()=>{
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/car/allCar',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token")
            }
          });
          const data = await response.json();
          setDataList(data);
          console.log(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        console.log(id);
        // try {
        //   await fetch(`http://localhost:4000/car/delete/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: localStorage.getItem("token")
        //     }
        //   });
        //   // Remove the deleted item from the state
        //   setDataList(prevData => prevData.filter(data => data.id !== id));
        // } catch (error) {
        //   console.log('Error deleting data:', error);
        // }
      };

    return (
        <div className="SecHandCar">
            <h2>SECOND-HAND CAR PAGE</h2>
            <div className="main-box">
                {dataList.map(data => (
                    <div className="data-box" key={data.id + data.title}>
                        <h4>Brand: {data.title}</h4>
                        <img src={data.image} alt={data.image} />
                        <p>Kilimeter: {data.kilometer}Km</p>
                        <p>scartchs: {data.scartchs}</p>
                        <p>color: {data.color}</p>
                        <p>Number of Accidents: {data.noOfAccidents}</p>
                        <p>Number of Prvious Buyers: {data.noOfPreviousBuyers}</p>
                        <p> registration Place: {data.registrationPlace}</p>
                        <button className="edit">Edit</button>
                        <button className="del" onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecHandCar;