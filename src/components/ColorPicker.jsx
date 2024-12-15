import { useState } from "react";
import styles from '../styles/ColorPicker.module.css'
function ColorPicker(){
    const selectedColor = "#FFFFFF";
    const [color, setColor] = useState(selectedColor);

    const setColorValue = (event)=>{
        setColor(event.target.value);
    }
    
    return (
        <>
        <div className={styles.mainColorWidget}>
            <h2>Color Picker</h2>
            <p className={styles.colorWidget} style={{backgroundColor: color}}>
                Seletced Color: {color}
            </p>
            <div className={styles.colorPickerWidget}>
                <p>
                Select a Color:  
                </p>
                <input type="color" value={color} onChange={setColorValue}/>
            </div>
        </div>
        </>
    );
}

export default ColorPicker