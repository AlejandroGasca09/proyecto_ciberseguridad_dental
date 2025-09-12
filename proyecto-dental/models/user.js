import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  paterno: { type: String, required: true },
  materno: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  genero: { type: String, enum: ['Masculino', 'Femenino'], required: true },
  usuario: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'usuario', 'invitado'], default: 'usuario' }
}, { timestamps: true });

const User = mongoose.models.User ||mongoose.model('User', userSchema);

export default User;
