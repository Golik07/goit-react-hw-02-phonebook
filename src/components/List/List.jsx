
import Item from "./Item/Item"

const List = ({contacts,handleDelete}) => {
    return (
        <ul>
            {contacts.map(({id,number,name}) => (
                <Item 
                id={id}
                key={id}
                name={name}
                number={number}
                handleDelete={handleDelete}
                ></Item>
            ))}
        </ul>
    )
}

export default List