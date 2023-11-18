import  mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.CONNECT_STRING)
        console.log("MongoDB Connected..");
    }catch(err){
        console.log(err);
        process.exit()
    }
}