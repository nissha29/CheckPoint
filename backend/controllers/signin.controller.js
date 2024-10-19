const signin = (req,res)=>{
    try{
        res.status(201).json({
            success: true,
            message: 'You are signed in'
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: `${err}, Server error`
        })
    }
}

module.exports = signin