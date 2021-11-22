const {InvalidBody}=require('../errors/index')
const {Users} = require('../database/database.json')

module.exports={
    async all(req,res,next){
        try{
            const users=await Users.filter((user)=>{return user})
            res.json({users})
        }catch(error){next(error)}    
    },    
}