import React, {useState, useEffect} from "react";

const SecHandCar=()=>{
    const [dataList, setDataList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [kilometer, setKilometer] = useState("");
    const [scartchs, setScartch] = useState("");
    const [color, setColor] = useState("");
    const [noOfAccidents, setNoAcc] = useState("");
    const [noOfPreviousBuyers, setBuyetCount] = useState("");
    const [registrationPlace, setRegist] = useState("");
    const [editId, setEditId] = useState("");
    const [filterColor, setFilterColor] = useState('');

    useEffect(() => {
        fetchData();
    }, [isEditing, filterColor]);

    const fetchData = async () => {
        try {
          const response = await fetch('https://nutty-blue-school-uniform.cyclic.app/car/allCar',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token")
            }
          });
          const data = await response.json();
          setDataList(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    };

    //delete function
    const handleDelete = async (id, ele) => {
        try {
          let res = await fetch(`https://nutty-blue-school-uniform.cyclic.app/car/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token")
            }
          });
          
          if(res.ok){
            let data =await res.json()
            alert(data.msg)
            if(data.msg === "Data deleted successfully"){
                let deletedData = [...dataList]
                let finditem = deletedData.findIndex(i => i._id===id)
                deletedData.splice(finditem, 1)
                setDataList(deletedData);
            }  
          }
        } catch (error) {
          console.log('Error deleting data:', error);
        }
      };

      //edit function
      const handleEdit = async (id, ele) => {
        setIsEditing(true);
        setEditId(id)
        setTitle(ele.title);
        setImage(ele.image);
        setKilometer(ele.kilometer);
        setScartch(ele.scartchs);
        setColor(ele.color);
        setNoAcc(ele.noOfAccidents);
        setBuyetCount(ele.noOfPreviousBuyers);
        setRegist(ele.registrationPlace);
      }; 
      
      const handleSubmit =async (event) => {
        event.preventDefault();
        try {
            let res = await fetch(`https://nutty-blue-school-uniform.cyclic.app/car/update/${editId}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: localStorage.getItem("token")
              },
              body: JSON.stringify({
                  image, 
                  title, 
                  kilometer,
                  scartchs,
                  color,
                  noOfAccidents,
                  noOfPreviousBuyers,
                  registrationPlace
              }),
            });
            
            if(res.ok){
              let data =await res.json()
              alert(data.msg)
            }

          } catch (error) {
            console.log('Error deleting data:', error);
          }   
        setIsEditing(false);
      };

      //filter function
      const handleColorFilterChange = (event) => {
        const selectedColor = event.target.value;
        setFilterColor(selectedColor);
      };

    return (
        <div className="SecHandCar">
            <h2>SECOND-HAND CAR PAGE</h2>
            <select value={filterColor} onChange={handleColorFilterChange}>
                <option value="">All Colors</option>
                <option value="red">Red</option>
                <option value="blue">blue</option>
                <option value="white">White</option>
                <option value="black">Black</option>
            </select>

            <div className="main-box">
                {dataList.filter((data) => !filterColor || data.color === filterColor)
                .map(data => (
                    <div className="data-box" key={data._id + data.title}>
                        <h4>Brand: {data.title}</h4>
                        <img src={data.image} alt={data.title} />
                        <ul>{data.discription.map((ele)=>{
                            return (
                                <li>{ele}</li>
                            )
                        })}</ul>
                        <p>Kilimeter: {data.kilometer}Km</p>
                        <p>scartchs: {data.scartchs}</p>
                        <p>color: {data.color}</p>
                        <p>Number of Accidents: {data.noOfAccidents}</p>
                        <p>Number of Prvious Buyers: {data.noOfPreviousBuyers}</p>
                        <p> registration Place: {data.registrationPlace}</p>
                        <button className="edit" onClick={() => handleEdit(data._id, data)}>Edit</button>
                        <button className="del" onClick={() => handleDelete(data._id, data)}>Delete</button>
                    </div>
                ))}
            </div>
            {isEditing && (
                <div className="edit-box" style={{ display: 'block' }}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label><br />
                            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <div>
                            <label>Add Image Link:</label><br />
                            <input type="url" value={image} onChange={(event) => setImage(event.target.value)} />
                        </div>
                        <div>
                            <label>Distence in KM:</label><br />
                            <input type="text" value={kilometer} onChange={(event) => setKilometer(event.target.value)} />
                        </div>
                        <div>
                            <label>scartchs:</label><br />
                            <input type="text" value={scartchs} onChange={(event) => setScartch(event.target.value)} />
                        </div>
                        <div>
                            <label>Color:</label><br />
                            <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
                        </div>
                        <div>
                            <label>Number Of Accident:</label><br />
                            <input type="number" value={noOfAccidents} onChange={(event) => setNoAcc(event.target.value)} />
                        </div>
                        <div>
                            <label>Number Of Previous Buyers:</label><br />
                            <input type="number" value={noOfPreviousBuyers} onChange={(event) => setBuyetCount(event.target.value)} />
                        </div>
                        <div>
                            <label>Registration Place:</label><br />
                            <input type="text" value={registrationPlace} onChange={(event) => setRegist(event.target.value)} />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}

            {!isEditing && (
                <div style={{ display: 'none' }}>
                </div>
            )}
        </div>
    )
}

export default SecHandCar;