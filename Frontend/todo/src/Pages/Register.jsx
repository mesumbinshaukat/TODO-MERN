import {useState} from 'react'
import axios from 'axios'

const Register = () => {
  const [user_name, setUserName] = useState({})
  const [user_email, setUserEmail] = useState({})
  const [user_password, setUserPassword] = useState({})
  const [user_age, setUserAge] = useState({})


  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      user_name: user_name,
      user_email: user_email,
      user_password: user_password,
      user_age: user_age
    }
    console.log(user_name,user_email,user_password,user_age)

    try
    {
      const response = await axios.post('/api/v2/register', user)
      console.log(response.data)
    }
    catch(error)
    {
      console.log(error)
    }

  }

  return (
    <div>
     
        <h1>Register Form</h1>
        <div className='container'>
            
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} name='user_name'/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e) => setUserEmail(e.target.value)} name='user_email'/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e) => setUserPassword(e.target.value)} name='user_password'/>
  </div>
  <div className="mb-3">
    <label className="form-check-label">Age</label>
    <input type="number" className="form-control" onChange={(e) => setUserAge(e.target.value)} name='user_age' />
  </div>
  <button type="submit" className="btn btn-primary" id='submit'>Submit</button>
</form>
    </div>
        </div>
  
  )
}

export default Register
