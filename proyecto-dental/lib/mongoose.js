import mongoose from "mongoose";

const connectionToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MongoURL);
  } catch (error) {
    console.log('Ocurrio un error al conectar a la base de datos')
  }
};

export default connectionToDatabase;
