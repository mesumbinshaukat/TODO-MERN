const todoUserModel = require('../Models/todo_user')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

// METHOD: POST
// ROUTE: api/v2/register
const insertUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_age } = req.body
        // REGEX HAIN NEECHE SAARI. CHATGPT SE UTHAYA HAI REGEX
        const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const name_regex = /^[a-zA-Z\s]+$/
        const age_regex = /^[0-9]+$/

        const salt = await bcryptjs.genSalt(10)
        
        if (!name_regex.test(user_name) || !email_regex.test(user_email) || !age_regex.test(user_age)) {
            console.log("Invalid input")
            console.table({ user_name, user_email, user_password, user_age })
            return res.status(400).json({ message: 'Invalid input' })
        }

        if(!user_password){
            console.log("Password is required")
            return res.status(400).json({ message: 'Password is required' })
        }

        const hashedPassword = await bcryptjs.hash(user_password, salt)

        const user = new todoUserModel({
            user_name: user_name,
            user_email: user_email,
            user_password: hashedPassword,
            user_age: user_age
        })

        const result = await user.save()

        if (result) {
            console.log("IF", result)
            const token = jwt.sign({ user_id: result._id }, process.env.PRIVATE_KEY)
            return res.status(200).json({ message: 'User registered successfully' })
        }
        
        else{
            console.log("ELSE", result)
            return res.status(400).json({ message: 'User registration failed' })
        }

    } catch (error) {
        console.log("CATCH Error: ", error)
        res.status(500).json({ message: error.message })
    }
}

// METHOD: POST
// ROUTE: api/v2/login
const checkUser = async (req, res) => {
    try {
        const { user_email, user_password } = req.body
        const user = await todoUserModel.findOne({ user_email: user_email })
        if (user) {
            const result = await bcryptjs.compare(user_password, user.user_password)
            if (result) {
                const token = jwt.sign({ user_id: user._id }, process.env.PRIVATE_KEY)
                return res.status(200).json({ message: 'User logged in successfully', token, user_id: user._id })
            }
            else {
                return res.status(400).json({ message: 'User login failed' })
            }
        }
        else {
            return res.status(400).json({ message: 'User login failed' })
        }
}

    catch (error) {
        console.log("CATCH Error: ", error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    insertUser, checkUser
}