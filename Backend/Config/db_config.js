const mongoose = require ('mongoose')
const conn = async () => {
    try
    {
        const con = await mongoose.connect(process.env.DATABASE_CONNECTION)
        if(!con){
            throw new Error('Connection Failed')
        }
    else if (con){
        console.log('Database Connected')
    }
    }
    catch(err)
    {
        console.log("Database Connection Failed",err)
    }
}

module.exports = conn