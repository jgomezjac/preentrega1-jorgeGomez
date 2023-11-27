import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import { UseCartContext } from '../../contexts/CartContext/CartContext';

const CartWidget = () => {

    const {productsCart} = UseCartContext()
    const cantidadArticulos = productsCart.length;
    return (
        <>
        <Button  variant="secondary">
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge className='ml-1' bg="warning">{cantidadArticulos}</Badge>
        </Button>
        </>
    )
}
export default CartWidget