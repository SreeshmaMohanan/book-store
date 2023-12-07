import React, { useContext, useState } from 'react'
import { Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/api'


function Authentication({register}) {
    const isRegisterForm=register?true:false 
    const navigate=useNavigate()
    const [userdata,setUserdata]=useState({
        username:"",password:"",email:""
    })
    const handleRegister=async(e)=>{
        e.preventDefault()
        const {username,email,password}=userdata
        if(!username||!email||!password){
            alert("Please fill all fields")
        }else{
            const result= await registerAPI(userdata)
            
            if(result.status===200){
                alert(`${result.data.username} has registered completly!!!!`)
                setUserdata({username:"",email:"",password:""})
                navigate("/login")
            
            }else{
                alert('Account alreay exists!!!')
                console.log(result);
            }
            
        
        }

    }
    const handleLogin=async(e)=>{
        e.preventDefault()
        const {email,password}=userdata
        if(!email || !password){
            alert("Email or password can not be empty")
            }else{
                const result =await loginAPI(userdata)
                if(result.status===200){
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                    sessionStorage.setItem("token",result.data.token)
                    // setIsAuth(true)
                    setUserdata({
                        email:"",
                        password:""
                    })
                    navigate('/')
                }else{
                    alert("Invalid Email or Password")
                    console.log(result);
                }

        }

    }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
            <Link style={{textDecoration:'none'}} to='/' className=''>Back to home</Link>
            <div className='card shadow p-5  bg-dark text-light'>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="https://img.lovepik.com/element/45009/2860.png_860.png" alt="" className='rounded-start w-100' />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center flex-column">
                            <h1>Project-Fair</h1>
                            <h5 className='fw-bolder mt-2 pb-3 text-light'>
                                {
                                    isRegisterForm?'sign up to your account':'sign in to your Account'
                                }
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterForm &&
                                        <Form.Group className='mb-3' controlId='formBasicName'>
                                            <Form.Control onChange={e=>setUserdata({...userdata,username:e.target.value})} value={userdata.username} type='usename' placeholder='usename'>
                                            </Form.Control>
                                        </Form.Group>
                                    }
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                            <Form.Control  value={userdata.email}  onChange={e=>setUserdata({...userdata,email:e.target.value})} type='email' placeholder='Enter your email'>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formBasicpaswd'>
                                            <Form.Control  value={userdata.password}  onChange={e=>setUserdata({...userdata,password:e.target.value})} type='password' placeholder='Enter password'>
                                            </Form.Control>
                                        </Form.Group>
                                        {
                                            isRegisterForm?
                                            <div className="mt-3">
                                                <button onClick={handleRegister} className="btn btn-light mb-2">Register</button>
                                                <p>Already Have An Account? Click here to <Link to='/login'>Login</Link></p>
                                            </div>:
                                            <div>
                                                <button onClick={handleLogin} className="btn btn-light mb-2">Login</button>
                                                <p>New User? Click here to <Link to='/register'>Register</Link></p>
                                            </div>
                                        }

                                </Form>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
        {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        /> */}

    </div>
  )
}

export default Authentication