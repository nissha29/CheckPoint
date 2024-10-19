const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://nishakashyap2907:rKEbzhPzJdcNpTZr@cluster0.dgrvb.mongodb.net/checkpoint')
        console.log(`${conn.connection.host}`)
    }catch(err){
        console.log('Error while setting up connection to the databse')
    }
}

module.exports = connectDB