'use client'
import axios from "axios"
import { useState } from "react"

export default function Registro(){
    const [nombre , setNombre ] = useState('')
    const [materno , setMaterno ] = useState('')
    const [paterno , setPaterno ] = useState('')
    const [telefono , setTelefono ] = useState('')
    const [email , setEmail ] = useState('')
    const [genero , setGenero ] = useState('')
    const [usuario , setUsuario ] = useState('')
    const [password , setPassword ] = useState('')
    const [confirmar  , setConfirmar ] = useState('')

    const handleSubmit = async(e) => {
         e.preventDefault();
        if(password != confirmar){
            console.log("Las contraseña no coinciden");
            return;
        }
        try{
            const response = await axios.post('/api/users',{nombre,paterno,materno,telefono,email,genero,usuario,password,confirmar})
            console.log(response)
        }catch(err){
            console.log(`Ocurrio un error de tipo : ${err}`)
        }
        console.log({nombre,paterno,materno,telefono,email,genero,usuario,password,confirmar})
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        <div className="registro max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center">Regitro de usuario</h2>
        <form onSubmit={handleSubmit}>
            <div className="nombre block text-gray-700 text-sm font-bold mb-2 ">
                <label htmlFor="nombre"> Nombre : </label>
                <input type="text" id="nombre" name="nombre" required placeholder="Introduce tu nombre" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="materno block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="paterno"> Apellido Paterno : </label>
                <input type="text" id="paterno" name="paterno" required placeholder="Introduce tu Apellido Paterno" onChange={(e) => setPaterno(e.target.value)}/>
            </div>
            <div className="paterno block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="materno"> Apellido Materno : </label>
                <input type="text" id="materno" name="materno" required placeholder="Introduce tu apellido Materno " onChange={(e) => setMaterno(e.target.value)}/>
            </div>
            <div className="telefono block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="telefono"> Numero Telefonico : </label>
                <input type="number" id="telefono" name="telefono" required placeholder="Introduce tu numero" onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div className="email block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="email"> Email : </label>
                <input type="email" id="email" required name="correo" placeholder="Introduce tu correo electronico" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="genero">
                <label htmlFor="genero"> Genero : </label>

                <input type="radio" id="masculino" className="" name="genero" value={"Masculino"} onChange={(e) => setGenero(e.target.value)} checked={genero === "Masculino"} />
                <label htmlFor="masculino"> Masculino :  </label>

                <input type="radio" id="femenino" name="genero" value={"Femenino"} onChange={(e) => setGenero(e.target.value)} checked={genero === "Femenino"} />
                <label htmlFor="femenino"> Femenino </label>
            </div>
            <div className="usuario block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="usuario">Introduce tu nombre de usuario : </label>
                <input type="text" id="usuario" name="usuario" required placeholder="Nombre de usuario" onChange={(e) => setUsuario(e.target.value)}/>
            </div>
            <div className="password block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="password"> Contraseña : </label>
                <input type="password" id="password" name="password" required placeholder="Contraseña"onChange={(e) => setPassword(e.target.value)} />
                <span className="helpex-text">Minimo 8 caracteres</span>
            </div>
            <div className="confirmar block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor="confirmar"> Confirma tu contraseña : </label>
                <input type="password" id="confirmar" name="confirmar" required placeholder="confirmar"onChange={(e) => setConfirmar(e.target.value)} />
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Registrar
                </button>
            </div>
        </form>
        </div>
        </div>
    )
}