const userModel = require('../models/users.model.js')

const myInfo = async(req,res)=>{
    try{
        const user = await userModel.findById(req.userId)
        return res.status(200).json({
            user
        })
    }catch(err){
        res.status(500).json({
            message: `Error in myInfo EP, ${err}`
        })
    }
}

module.exports = myInfo