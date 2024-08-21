import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		const u=process.env.MONGO_URI;
		const conn = await mongoose.connect("mongodb+srv://swastikpradhan185:2kH5sKr0btmReqLq@cluster0.507fc.mongodb.net/Social?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
