import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const mTaskReturnProductsFromFirebase = ( cid='' ) => {
    return new Promise((res, rej)=>{
        const dbFirestore       = getFirestore();
        const queryCollection   = collection( dbFirestore, 'products');
        const queryFilter = cid ? query( queryCollection , where("category",'==',cid)) : queryCollection;
        getDocs( queryFilter ).then( 
                result => res(result.docs.map( product =>({id:product.id, ...product.data()}) ))
        )
        .catch( 
            err => rej(  err ) 
        )
    })
}