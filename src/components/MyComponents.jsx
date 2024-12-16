import { useState } from "react";

function MyComponenets(){

    const [name, setName] = useState("User");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    const [laptop, setLaptop ] = useState({
        year: 2024,
        company: "Hp",
        name: "Hp Leion 11"
    });


    const [foods , setFood] = useState([
        "Mango",
        "Apple",
        "Banana",
    ]);





    const addNewFood = ()=>{
        const newItem = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        foods.includes(newItem) ?
        null:
        setFood(f => [...f ,  newItem  ]);
    }

    const removeFoodItem = (index)=>{
        const newList = foods.filter((value, i) => {
            return i !== index;
        });

        setFood(newList);
    }


    const setUserName = (event)=>{
        setName(event.target.value);
    }

    const setTheQUanitity = (event)=>{
        setQuantity(event.target.value);
    }

    const setUserComment = (event)=>{
        setComment(event.target.value);
    } 

    const setPaymentMethod = (event)=>{
        setPayment(event.target.value);
    } 

    const setShippingMethod = (event)=>{
        setShipping(event.target.value);
    } 


    const setLaptopYear = (event)=>{
        setLaptop(l => ({...l , year:event.target.value}));
    }

    const setLaptopCompany = (event)=>{
        setLaptop(l => ({...l, company: event.target.value}))
    }


    const setlaptopName = (event)=>{
        setLaptop(l=> ({...l, name: event.target.value}))
    } 



    const [cars , setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [company, setCompany] = useState("");
    const [carName, setCarName] = useState("");

    const addCarInList = ()=>{
        const newCar = ({
            year: year,
            company: company,
            carName: carName
        });

        setCars(c => [...c , newCar]);

        setYear(new Date().getFullYear());
        setCarName("");
        setCompany("");
    }

    const removeCarFromList = (index)=>{
        setCars(c => c.filter((car, i) => i !== index));
    }

    const onYearChange = (event)=>{
        setYear(event.target.value);
    }

    const onCompanyChange = (event)=>{
        setCompany(event.target.value);
    }
    
    const onCarNameChange = (event)=>{
        setCarName(event.target.value);
    }
    



    return (
        <>
       
        <h1>List of Cars</h1>
        <ul>
            {
                cars.map((car, index) => <>
                    <li key={index} onClick={() => removeCarFromList(index)}>
                        {car.carName} {car.company} {car.year}
                    </li>
                </> )
            }
        </ul>

        <input type="number" value={year} onChange={onYearChange} /> <br />
        <input type="text" value={company} onChange={onCompanyChange} /> <br />
        <input type="text" value={carName} onChange={onCarNameChange} /> <br />
        <br />
        <button onClick={addCarInList}>
            Add Car
        </button>


        <br />
        <br />
        <br />
        <input value={name} onChange={(event)=> setUserName(event)}/>
        <p>Name : {name}</p>

        <input value={quantity} type="number" onChange={(event)=> setTheQUanitity(event)}/>
        <p>Quantity : {quantity}</p>

        <textarea  
        placeholder="Enter Delivery Instructions..."
         onChange={(event)=> setUserComment(event)}
         />
        <p>Comment : {comment}</p>

        {/* For DropDown We use Select */}
        <select value={payment} onChange={(event) => setPaymentMethod(event)}>
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Cradit Cards">Cradit Cards</option>
            <option value="Gift Cards">Gift Cards</option>
            <option value="e-Wallet">e-Wallet</option>
        </select>
        <p>Payment Method : {payment}</p>

 
        <label >
            <input 
            type="radio"
             value="Pick-Up"
              checked={shipping === "Pick-Up"}
               onChange={setShippingMethod}/>
            Pick-Up
        
        </label>
        <br />
        <label >
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={setShippingMethod}/>
            Delivery
        </label>

        <div>
            <p>My Favorite Laptop : {laptop.name} {laptop.company} {laptop.year} </p>
            <input type="number" value={laptop.year} onChange={setLaptopYear} /><br />
            <input type="string" value={laptop.company} onChange={setLaptopCompany} /><br />
            <input type="string" value={laptop.name} onChange={setlaptopName} /><br />

        </div>


        <div>
            <h2>
                List of Foods
            </h2>
            <ul>
                {
                    foods.map((food, index)=>
                        <li key={index} onClick={()=> removeFoodItem(index)} >
                            {food}
                        </li>
                    )
                }
            </ul>

            <input type="text"  id="foodInput" /> <button onClick={addNewFood}>Add Food</button>
        </div>

        </>
    );
}

export default MyComponenets