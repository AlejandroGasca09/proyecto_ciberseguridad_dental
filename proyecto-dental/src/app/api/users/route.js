import connectionToDatabase from "../../../../lib/mongoose";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { Matemasie } from "next/font/google";

export async function POST(req) {
    try {
        await connectionToDatabase()
        const {nombre,paterno,materno,telefono,email,genero,usuario,confirmar,password} = await req.json()

        console.log("Registro recibido:", { nombre, email, usuario });


        if ( !nombre || !paterno || !materno || !telefono || !email || !genero || !usuario || !confirmar || !password){
            return NextResponse.json({message : "Por favor llena todos los campos"}, {status : 400})
        }

        if ( password.length < 8){
            return NextResponse.json({message : "La contraseña es menor a 8 caracteres"}, {status : 400})
        }

        const emailREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailREGEX.test(email)){
            return NextResponse.json({message : "El correo no es valido"}, {status : 400})
        }

         if(password != confirmar){
            return NextResponse.json({message : "Las contraseñas no coinciden "} , {status : 400})
        }

        const existUser = await User.findOne({email})
        if(existUser){
            return NextResponse.json({message : "El usuario ya esta registrado"}  , {status : 409})
        }

        const users = await User.find();
        console.log(`Usuario registrads: ${users}`)

        const hashedPassword = await bcrypt.hash(password,10) 

        const newUser = new User({nombre,paterno,materno,telefono,email,genero,usuario,password : hashedPassword,rol:'usuario'})

        await newUser.save();
        return NextResponse.json({ message: 'Usuario registrado correctamente', user: newUser }, { status: 201 });

    } catch (error) {
        console.error("Error al registrar usuario:", error);
        return NextResponse.json({ message: "Error interno del servidor" },{ status: 500 });
    }
    
}