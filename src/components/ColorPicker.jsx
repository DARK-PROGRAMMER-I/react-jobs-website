import { useState } from "react";

function ColorPicker(){
    const selectedColor = "#FFFFFF";
    const [color, setColor] = useState(selectedColor);

    const setColorValue = (event)=>{
        setColor(event.target.value);
    }
    
    return (
        <>
        <div>
            <h2>Color Picker</h2>
            <p style={{backgroundColor: color}}>
                Seletced Color: {color}
            </p>
            <div>
                <p>
                    Select a Color: <input type="color" value={color} onChange={setColorValue}/>
                </p>
            </div>
        </div>
        </>
    );
}

export default ColorPicker