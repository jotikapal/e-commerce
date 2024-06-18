import mongoose from "mongoose";

export const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Mongo Connection successfully established.")
    } catch (error) {
        throw new Error("Error connecting to MongoDB")
    }
};
export default connect;