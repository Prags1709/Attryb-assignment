import React, { useState, useEffect } from "react";

const OemCar = () => {
    const [dataList, setDataList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://repulsive-outfit-frog.cyclic.cloud/oem/allOem', {
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
        filterData(searchQuery, filter);
    };

    const filterData = (query, priceFilter) => {
        let filtered = dataList;

        if (query) {
            filtered = filtered.filter((data) =>
                data.modelName.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (priceFilter) {
            switch (priceFilter) {
                case '10L-8L':
                    filtered = filtered.filter((data) => data.price >= 8 && data.price <= 10);
                    break;
                case '8L-5L':
                    filtered = filtered.filter((data) => data.price >= 5 && data.price <= 8);
                    break;
                // Add more price filter options if needed
                default:
                    break;
            }
        }

        setDataList(filtered);
    };

    return (
        <div className="OemCar">
            <h2>OEM CAR PAGE</h2>
            <select value={priceFilter} onChange={handlePriceFilterChange}>
                <option value="">All Prices</option>
                <option value="10L-8L">10L-8L</option>
                <option value="8L-5L">8L-5L</option>
            </select>
            <div className="main-box">
                {dataList.map(data => (
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