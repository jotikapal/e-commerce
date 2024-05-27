import mongoose from "mongoose";

export const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect('mongodb+srv://jotikanepal7:7LY8PDVICouehIlT@cluster0.cgskmmf.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Mongo Connection successfully established.")
    } catch (error) {
        throw new Error("Error connecting to MongoDB")
    }
};
export default connect;