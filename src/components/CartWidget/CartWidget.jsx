import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const CartWidget = () => {
    const cantidadArticulos = 5;
    const [show, setShow] = useState(false);
    const handleNotificacion = () => {
        setShow(!show);
    }
    const toggleShowA=() => {
        setShow(false);
    }

    return (
        <>
        <Button onClick={handleNotificacion} variant="secondary">
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge className='ml-1' bg="warning">{cantidadArticulos}</Badge>
        </Button>

        <ToastContainer className='mt-5' position='middle-center' style={{ zIndex: 1 }}>
            <Toast onClose={toggleShowA} show={show} data-bs-theme='bg-warning'>
                <Toast.Header>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <strong className="ml-2 me-auto">Mi Carrito</strong>
                </Toast.Header>
                <Toast.Body className='bg-warning' data-bs-theme='bg-warning'>Tienes {cantidadArticulos} artículos en el carrito</Toast.Body>
            </Toast>
        </ToastContainer>
        </>
    )
}
export default CartWidget