const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`${conn.connection.host}`)
    }catch(err){
        console.log(`${err}, Error while setting up connection to the databse`)
        process.exit(1)
    }
}

module.exports = connectDB