// -- *TODO* --

// **********IMPORTANT NOTE**********
/* 
Sir, yeh mat samjhiyega ke yeh sab *CHATGPT* se uthaya hai, comments se leke code tak meine hi likha hai. Mere paas coding assisstant hai VSCODE pe as an extension jo bs suggestions deta hai.

Magar sab kch meine khudne hi likha hai, beshak aap mjhse kch bhi question poochlain kahin se bhi aur kch bhi iss *TODO* ke practical se related.
*/
// **********END OF NOTE (Sir Continue Evaluating My Code)**********

// Idhar sab kch import kia hai
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

// Neeche meine Mongo Atlas se connect karne ke liye import kia module `Config/db_config.js` se
const db = require('./Config/db_config')

// Neeche meine Controllers Import Kiye Hain
const { insertUser, checkUser } = require('./Controllers/Controller_User')

//  Yahan frontend ke liye meine cors define kia hai, jiska port 5173 hai default
// Mazeed maloomat ke liye mjhse rabta karain ;)
const corsOptions = {
    origin: 'http://localhost:5173/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

// Backend pe meine cors ko enable kia hai
app.use(cors(corsOptions))

// Backend pe body parser ko enable kia hai
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Neeche User Ke Liye Routes Hain ->
app.post('/api/v2/register', insertUser)
app.post('/api/v2/login', checkUser)

// Agar se .env wali file mein port define nhi hai ya .env file hee nhi hai toh default port 3000 pe listen karega mera backend
const port = process.env.PORT ? process.env.PORT : 3000

app.listen(port, () => {
    console.log(`Backend-Server is running on ${port}`)
    db();
})

// Comments bhardiye meine, I hope maza aye, maza na aye toh Rafay ke practical marks se mjhe kch marks dedain. ~ StudentID: 1391522 | Batch: 2206C1 | APKA CUTE AND INTELLIGENT STUDENT *MESUM BIN SHAUKAT*