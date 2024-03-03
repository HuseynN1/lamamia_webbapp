import mongoose  from "mongoose";


const connect =async()=>{
  try{
    await mongoose.connect(process.env.MONGO,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log("Mongo connection succesfull")
  }
  catch(error){
    throw new Error("Connection failed")
  }
}

export default connect