function getTokenActual(){
    return localStorage.getItem("token");
}

function setTokenActual(token){
    return localStorage.setItem("token",token);
}

export {
    getTokenActual,
    setTokenActual,
}