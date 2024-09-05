import React from 'react'

const Login = () => {
  return (
    <>
    <div className="login-register">
        <h2><span className='login'>Login</span><span className='span-h2'>|</span><span className='register'>Register</span></h2>
        <div className="loginform">
            <form action="">
                <label htmlFor="">UserName</label>
                <input className='input' type="text" placeholder='Username'/>
                <label htmlFor="">Password</label>
                <input className='input' type="password" placeholder='Password'/>
                <div className="forgotpassword">
                    <span><input type="checkbox" name="" id="" />Remember me</span>
                    <span>Forgot Password?</span>
                </div>
                <button className='loginbtn'>LOGIN</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login