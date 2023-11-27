export const mTaskReturnProductsFromJsonData = () => {
    return new Promise((res, rej)=>{
        setTimeout(function(){
            fetch('/assets/data/data.json').then(response => res( response.json() ) )
        },1000);
    })
}