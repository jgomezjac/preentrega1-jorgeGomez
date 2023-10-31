const productos = ([
    {id:'1', nombre:'Sombreros Newsboy para hombre', descripcion:'Sombreros Newsboy para hombre, gorra plana, de algodón, ajustables y transpirables, para taxista irlandés, hiedra, conducir Gatsby', category:'gorras', precio:'1250', imagen:'41KCwyKYUpL.jpg'},
    {id:'2', nombre:'VOBOOM Boina de algodón ajustable para hombre',  descripcion:'VOBOOM Boina de algodón ajustable para hombre, gorra de hiedra, gorra plana de taxista', category:'gorras', precio:'1250', imagen:'61AxNTXcP5L.jpg'},
    {id:'3', nombre:'Gorra Gudessly de piel auténtica', descripcion:'Gorra Gudessly de piel auténtica ajustable de piel de vacuno para hombre, periodista, boina de taxista, sombrero para conducir, cazar y pescar', category:'gorras', precio:'2000', imagen:'71Hbjsj2aoL.jpg'},
    {id:'4', nombre:'Gorra ajustable New Era', descripcion:'Gorra ajustable New Era MLB The League 9FORTY, talla única', category:'gorras', precio:'2000', imagen:'617UggF8w9L.jpg'},
    {id:'5', nombre:'Gorra de béisbol de dibujos animados',descripcion:'Gorra de béisbol de dibujos animados para hombres y mujeres, sombrero de malla de Hip Hop Dad Gorra de camionero', category:'gorras', precio:'2000', imagen:'710RWjxCF8L._AC_UL1500_.jpg'},
    {id:'6', nombre:'Gorra Gudessly de piel auténtica', descripcion:'Gorra Gudessly de piel auténtica ajustable de piel de vacuno para hombre, periodista, boina de taxista, sombrero para conducir, cazar y pescar', category:'camisas', precio:'2000', imagen:'71Hbjsj2aoL.jpg'},
    {id:'7', nombre:'Gorra ajustable New Era', descripcion:'Gorra ajustable New Era MLB The League 9FORTY, talla única', category:'camisas', precio:'2000', imagen:'617UggF8w9L.jpg'},
    {id:'8', nombre:'Gorra de béisbol de dibujos animados',   descripcion:'Gorra de béisbol de dibujos animados para hombres y mujeres, sombrero de malla de Hip Hop Dad Gorra de camionero', category:'camisas', precio:'2000', imagen:'710RWjxCF8L._AC_UL1500_.jpg'}
])
export const mTaskReturnProducts = () => {
    return new Promise((res, rej)=>{
        setTimeout(function(){
            //console.log('llamando al fetch');
            res( productos );
        },2000);
    })
}