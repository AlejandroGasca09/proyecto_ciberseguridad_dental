import connectionToDatabase from "../../../../lib/mongoose";
import User from "../../../../models/user";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectionToDatabase();
        const { email, password } = await req.json();
        console.log("Registro recibido:", { email, password });

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({message : "Usuario no encontrado"}, {status : 404});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log('¿La contraseña coincide?', passwordMatch);

        if (!passwordMatch) {
            return NextResponse.json({message : "Contraseña incorrecta"}, {status : 401});
        }

        const { password: _, ...userWithoutPassword } = user.toObject();

        return NextResponse.json({message: "Inicio de sesión exitoso" , user: userWithoutPassword});

    } catch (error) {
        console.error("Error en login :", error);
        return NextResponse.json({ message: "Error interno del servidor" },{ status: 500 });
    }
}