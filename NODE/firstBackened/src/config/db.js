import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // connecting the mongodb database
    console.log("MongoDB Connected at :", conn.connection.host,":",conn.connection.port);

    // console.log(  `MongoDB Connected at :${conn.connection.host}:${conn.connection.port}`);

    console.log("Database Name :",conn.connection.name);
     } catch (errror) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
