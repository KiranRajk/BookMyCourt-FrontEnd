import React from 'react'
import './LoginPage.css'
import SignUp from '../../components/Authorization/SignUp'
function LoginPage() {
  return (
    <div className='login-container d-flex justify-content-center align-items-center'>
        <SignUp/>
     </div>
  )
}

export default LoginPage