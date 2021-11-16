import React from 'react'
import {login} from '../services/authService'; 
import { productoServicio } from '../services/productoServicio';
import { setTokenActual } from '../util/jwt';

const Login = () => {
    const Loguear= async (evt)=>{
        login("admin","1234")
            .then(async (response)=>{
                const respaux=await response.json();
                setTokenActual(respaux.token);
                console.log(respaux.token,"token");
            })
    }
    const UsarToken=()=>{
        productoServicio.getTodosLosProductos()
        .then();
    }
    return (
        <div>
            <button onClick={Loguear} >
                Ingresar
            </button>
            <button onClick={UsarToken} >
                Usar Token
            </button>
        </div>
    )
}

export default Login
