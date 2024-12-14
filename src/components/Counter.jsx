import { useState } from "react";

function Counter(){
    const [name, setName] = useState("Name");
    const [age, setAge] = useState(0);
    const [isEmploye, setIsEmploye] = useState(false);


    const changeName = ()=> {
        setName('Ammar');
    }

    const ageIncrement = ()=> {
        setAge(age + 1);
    }


    const toggleStatus = ()=> {
        setIsEmploye(!isEmploye)
    }

    return (
        <div>
            <p>
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
            </button>
        </div>
    );
}

export default Counter