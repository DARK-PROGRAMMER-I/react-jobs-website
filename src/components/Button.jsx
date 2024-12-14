import styles from '../styles/Button.module.css'



function Button(){
    let count = 0;
    const handleClick = (name)=> {
        if(count < 4){
            count++;
            console.log(`${name} you clicked ${count} time/s`);
        }else{
            console.log(`${name} Stop Clicking Me !`);
        }
    };


    return (
        <button onClick={()=> handleClick("Ammar")}
         className={styles.button}>
            Click Me 😄
        </button>
    );
}

export default Button