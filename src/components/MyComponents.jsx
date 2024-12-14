import { useState } from "react";

function MyComponenets(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


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


    return (
        <>
        <input type="text" onChange={(event)=> setUserName(event)}/>
        <p>Name : {name}</p>
        </>
    );
}

export default MyComponenets