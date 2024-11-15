import {useState} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

const Login = () => {

    if(localStorage.getItem('token'))
    {
        return <Navigate to='/'/>
    }

  const [user_email, setUserEmail] = useState({})
  const [user_password, setUserPassword] = useState({})
 

  
  const handleSubmit = async (e) => {
      e.preventDefault()
    
   
    console.log(user_email, user_password)

    const user = {
        user_email: user_email,
        user_password: user_password
    }

    console.log(user)

    try
    {
      const response = await axios.post('/api/v2/login', user)
      console.log(response.data)
      const {token} = response.data 
      console.log(token)
      console.log(localStorage.setItem('token', token))
      console.log(token_set)
    }
    catch(error)
    {
      console.log(error)
    }

  }



  return (
    <div>
     
        <h1>Login Form</h1>
        <div className='container'>
            
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e) => setUserEmail(e.target.value)} name='user_email'/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e) => setUserPassword(e.target.value)} name='user_password'/>
  </div>
  <button type="submit" className="btn btn-primary" id='login'>Login</button>
</form>
    </div>
        </div>
  
  )
}

export default Login
