import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"

export const CartContainer = () => {
    useEffect( () => {
        console.log('carrito 1');
    }, [])
    return <>    
        <Container className='mt-2'>
            <Row>
                <Col><h1>Contenido del carrito</h1></Col>
            </Row>
        </Container>
    </>
}