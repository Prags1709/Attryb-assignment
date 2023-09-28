import React, { useState, useEffect } from "react";

const OemCar = () => {
    const [dataList, setDataList] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        fetchData();
    }, [priceFilter]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://persian-blue-yak-hose.cyclic.cloud/oem/allOem', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setDataList(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handlePriceFilterChange = (event) => {
        const filter = event.target.value;
        setPriceFilter(filter);
    };

    return (
        <div className="OemCar">
            <h2>OEM CAR PAGE</h2>
            <select value={priceFilter} onChange={handlePriceFilterChange}>
                <option value="">All Prices</option>
                <option value="10">Above 10L</option>
                <option value="8">Above 8</option>
                <option value="6">Above 6</option>
            </select>
            <div className="main-box">
                {dataList.filter((data)=> !priceFilter || data.price > priceFilter)
                .map(data => (
                    <div className="data-box" key={data._id + data.modelName}>
                        <h4>Model Name: {data.modelName}</h4>
                        <p>Year Of Model: {data.yearOfModel}</p>
                        <img src={data.image} alt={data.modelName} />
                        <h5>Available Colors</h5>
                        <div className="car-color">{data.color.map((ele) => {
                            return (
                                <div style={{
                                    backgroundColor: `${ele}`
                                }}></div>
                            )
                        })}</div>
                        <p>Price: {data.price}L</p>
                        <p>Mileage: {data.mileage}</p>
                        <p>Power: {data.power}</p>
                        <p>Max Speed: {data.maxsped}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OemCar;