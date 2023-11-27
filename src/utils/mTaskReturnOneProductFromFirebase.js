import { getFirestore, getDoc, doc } from "firebase/firestore";

export const mTaskReturnOneProductFromFirebase = ( pid ) => {
    return new Promise((res, rej)=>{
        const dbFirestore = getFirestore();
        const queryDoc = doc( dbFirestore, 'products',pid);
        getDoc( queryDoc )
        .then( result => res( {id:result.id, ...result.data() }) )
        .catch( error => rej( error ))
    })
}