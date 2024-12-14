import styles from '../styles/List.module.css'
import PropTypes from 'prop-types'



function List({ listOfItems, category }) {

    const itemsList = listOfItems.map(item =><>
        <li key={item.id}>
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


List.proptypes = {
    listOfItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        vitamin: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })),
    category: PropTypes.string.isRequired
}

List.defaultProps = {
    listOfItems: [],
    category: 'Category'
}


export default List