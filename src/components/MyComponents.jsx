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






    return (
        <>
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
                        <li key={index} >
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