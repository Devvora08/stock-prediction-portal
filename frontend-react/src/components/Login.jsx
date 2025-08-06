import axios from 'axios'
import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)

    const userData = {
      username, password
    }
    //console.log(userData)
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      // console.log(response.data)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      console.log('Login Successful')
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      console.log(', invalid credentials', error)
      setErrors(error)
    } finally {
      setLoading(false)
      setErrors('')
      setUsername('')
      setPassword('')
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-light-dark p-5 rounded'>
            <h3 className='text-light text-center mb-5'>Login to Portal</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" className='form-control' placeholder='Enter username' />
              </div>
              <div className='mb-4'>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='form-control' placeholder='Enter password' />
              </div>
              <button disabled={loading} type='submit' className='btn btn-info mb-3 d-block mx-auto'>Login</button>
              {errors && <div className='text-danger'>{errors}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login