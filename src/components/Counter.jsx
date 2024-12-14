import { useState } from "react";
import styles from '../styles/Counter.module.css'


function Counter(){


    // const [name, setName] = useState("Name");
    // const [age, setAge] = useState(0);
    // const [isEmploye, setIsEmploye] = useState(false);

    // const changeName = ()=> {
    //     setName('Ammar');
    // }

    // const ageIncrement = ()=> {
    //     setAge(age + 1);
    // }


    // const toggleStatus = ()=> {
    //     setIsEmploye(!isEmploye)
    // }


    const [count, setCount] = useState(0);

    const incrementCounter = ()=> {
        setCount(count + 1);
    }

    const decrementCounter = ()=>{
        if(count >0){
        setCount(count -1);
        }
    }

    const resetCounter = ()=> {
        setCount(0);
    }


    return (
        <div className={styles.counter}>
            <h2>
                Count: {count}
            </h2>

            <div>
                <button className={styles.decrement} onClick={decrementCounter}>Decrement</button>
                <button className={styles.reset} onClick={resetCounter}>Reset</button>
                <button className={styles.increment} onClick={incrementCounter}>Increment</button>
            </div>


            {/* <p>
                Name: {name}
            </p>
            <button onClick={changeName}>
                Set Name
            </button>

            <p>
                Age: {age}
            </p>
            <button onClick={ageIncrement}>
                Increment Age
            </button>
            <p>
                Employe: {isEmploye ? "Yes" : "No"}
            </p>
            <button onClick={toggleStatus}>
                Toggle Status
            </button> */}
            
        </div>
    );
}

export default Counter