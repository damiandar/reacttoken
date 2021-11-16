


const login= async(username, password)=>{
    return fetch("http://localhost:14643/api/login",{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            Nombre: username,
            Contrasenia:password
        })
    })
    .then(authresponse=> {
        return authresponse;
    } )
}

export {
    login
}