import styles from '../styles/List.module.css'
import Proptypes from 'prop-types'



function List({ listOfItems, category }) {

    const itemsList = listOfItems.map(item =><>
        <li>
            {item.name} : {item.vitamin}
        </li>
        </>);


    return (
       
        <>
            <h3 className={styles.listTitle}>{category}</h3>
            {
                 itemsList.length == 0 ?
                 <p className={styles.emptyList}>
                     List is Empty....
                 </p> :
                 <ol className={styles.items}>
                 {itemsList}
             </ol>
            }
            
        </>
    );
}


List.defaultProps = {
    listOfItems: [],
    category: 'Undefined'
}


export default List