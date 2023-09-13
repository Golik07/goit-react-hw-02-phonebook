import {Li,Button} from "./Item.styled"
const Item = ({name,number,id,handleDelete}) => {
return (
    <Li>
        <p>{name}</p>
        <p>{number}</p>
        <Button onClick={()=> handleDelete(id)}type="button">Delete</Button>
    </Li>
    );
}


export default Item 