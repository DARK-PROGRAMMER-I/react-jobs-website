import { useState } from "react";

function Counter(){
    const [name, setName] = useState("Name");
    const [age, setAge] = useState(0);
    const [isEmploye, setIsEmploye] = useState(false);


    const changeName = ()=> {
        setName('Ammar');
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
            <button onClick={changeName}>
                Increment Age
            </button>
            <p>
                Employe: {isEmploye ? "Yes" : "No"}
            </p>
        </div>
    );
}

export default Counter