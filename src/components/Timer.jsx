import { useState, useEffect } from "react";
import styles from "../styles/Timer.module.css"

function Timer(){

    let [time, setTime] = useState(new Date());
    
    useEffect(()=>{
        const intervalId =  setInterval(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId)
        }
    }, []);


    function formatTime() {
      
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";
      
        hours = hours % 12 || 12; // Convert 0-23 to 1-12 and handle midnight (0 -> 12)
      
        const pad = (num) => num.toString().padStart(2, "0");
      
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
      };
      

    return (
    <>
        <div className={styles.timerBackground}>
            <span>
                {formatTime()}
            </span>
        </div>
    </>
    );
}

export default Timer