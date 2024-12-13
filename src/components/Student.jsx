import Proptype from 'prop-types'
import styles from '../styles/Student.module.css'

function Student(props){
    return(
        <div className= {styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

 
Student.proptypes = {
    name: Proptype.string,
    age: Proptype.number,
    isStudent: Proptype.bool
}


Student.defaultProps = {
    name : "Hola Kapito",
    age : 0,
    isStudent: false
}

export default Student