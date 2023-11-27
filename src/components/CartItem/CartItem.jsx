import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'
import { UseCartContext } from "../../contexts/CartContext/CartContext";

export const CartItem = ({product}) => {
    const {deleteProduct} = UseCartContext()
    const mdelProduct=() => {
        let conf= confirm("Esta seguro/a?")
        if(!conf) return false;
        deleteProduct(product);
    }
    return (
        <tr>
            <th>{product.name}</th>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.cantidad}</td>
            <td className='text-end'>$ {product.price*product.cantidad}</td>
            <td>
                <button className='btn btn-danger' onClick={mdelProduct}>
                <FontAwesomeIcon icon={faTrashCanArrowUp} />
                </button>
            </td>
        </tr>
    )
}