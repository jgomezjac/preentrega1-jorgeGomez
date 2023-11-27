import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { mTaskReturnProductsFromFirebase } from '../../utils/mTaskReturnProductsFromFirebase';
import { ItemCard } from '../ItemCard/ItemCard';
import ModalLoading from '../ModalLoading/ModalLoading';
import { useParams } from 'react-router-dom';

function ItemListContainer ({ greeting }) {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading]= useState(true);
    const { cid } = useParams();

    useEffect(()=>{
            mTaskReturnProductsFromFirebase(cid)
            .then( resultado => setProducts( resultado ) )
            .catch( error => console.log(error))
            .finally(()=> setLoading(false))
    }, [cid])

    return (
        <Container className='mt-2'>
           
                {loading ? <ModalLoading mensaje='Cargando contenido de productos'/>
                :
                products.map( product => 
                    <ItemCard key={product.id} product={product}/>
                )}
           
        </Container>
    )
}
export default ItemListContainer