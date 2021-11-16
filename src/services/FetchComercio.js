import { getTokenActual } from "../util/jwt";

export const FetchComercio={
    get,
    post,
    put,
    getbyid
}
const jwtToken=getTokenActual();

function get(url){
    var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${jwtToken}`);
    const opciones={
        method:'GET',
        headers:myHeaders
    };
   //opciones["Authorization"] = `Bearer ${jwtToken}`;
    console.log(opciones);
    console.log(url,"url");
    return fetch(url,opciones).then(handleRespuesta);
}
function getbyid(url){
    const opciones={
        method:'GET'
    };
    return fetch(url,opciones).then(handleRespuesta);
}

function post(url,body){
    const opciones={
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify(body)
    };
    return fetch(url,opciones).then(handleRespuesta);

}
function put(url,body){
    const opciones={
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify(body)
    };
    return fetch(url,opciones).then(handleRespuesta);

}

function handleRespuesta(response){
    return response.text().then(text=>{
        const data= text && JSON.parse(text);
        if(!response.ok){
            const error=(data&& data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}