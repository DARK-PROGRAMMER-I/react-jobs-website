

function List({ listOfItems, category }) {

    const itemsList = listOfItems.map(item =><>
        <li>
            {item.name} : {item.vitamin}
        </li>
        </>);


    return (
        <>
            <h3 className="">{category}</h3>
            <ol className="items">
                {itemsList}
            </ol>
        </>
    );
}


export default List