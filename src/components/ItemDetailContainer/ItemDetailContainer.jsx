import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import {mTaskReturnOneProductFromFirebase}  from "../../utils/mTaskReturnOneProductFromFirebase"
import ModalLoading from "../ModalLoading/ModalLoading";

export const ItemDetailContainer = () => {
    const [product,setProduct]= useState({});
    const [loading,setLoading]= useState(true);
    const {pid}= useParams();
    
    useEffect(()=>{
        mTaskReturnOneProductFromFirebase( pid )
        .then( resultado => setProduct( resultado ) )
        .catch( error => console.log(error))
        .finally(() => setLoading(false))
    },[])
    
    return (
        <>
        {loading ? <ModalLoading mensaje='Cargando contenido del producto seleccionado'/>
        :
        <ItemDetail product={product} />
        }
        </>
    )
}