
// const getUser = ()=> {
//     return {
//         uid:'ABC123',
//         username :'El_Papi1502'
//     }
// };

// const getUser2 = ()=>({
//     uid:'ABC123',
//     username:'El_Papi1502'
// });
// console.log(getUser2());

// const user = getUser();
// console.log (user);

// function getUsuarioActivo (nombre) {
//     return {
//         uid:'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo= getUsuarioActivo('Fernando');
// console.log (usuarioActivo);

// const usuarioActivo2=(nombre)=>({
//     uid:'ABC567',
//     username: nombre
// })
// const getUsuarioActivo2=usuarioActivo('fernando')
// console.log(getUsuarioActivo2);

const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Iroman',
}

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const {nombre}=persona;
// console.log(nombre);

const retornaPersona =({nombre,edad})=>{
    console.log (nombre,edad);
}
retornaPersona (persona);

const useContent =({clave,nombre,edad,rango ='Capitan'})=>{
    // console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.1232,
            lng:-12.3232
        }
    }

}

const {nombreClave, anios, latlng:{lat,lng}} = useContent (persona);

console.log(nombreClave,anios);
console.log(lat,lng);

