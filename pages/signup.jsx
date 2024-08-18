import Link from 'next/link'
import React, { useState, useEffect }  from 'react'
import { useRouter } from "next/router";

const Signup = () => {
  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('') 
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      router.push('/')
    }
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
   if (name === "name"){
    setName(
      value
    )
   }
   else if (name === "email"){
    setEmail(
      value
    )
   }
   else if (name === "password"){
    setPassword(
      value
    )
   }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = {name, email, password}

    let res = fetch("/api/signup", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data=>{

    })
    .catch(error=>console.log(error))
    setEmail('')
    setName('')
    setPassword('')
    
   
  } 
  return (
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 main">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up and create new account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  className='space-y-6' method='POST'>
      <div >
      <label
      htmlFor='name'
      className="block  text-sm font-medium leading-6 text-gray-900"
      >Name:</label>
      <input value={name} id='name' name='name' type='name' onChange={handleChange} 
      className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <div>
      <label
      htmlFor='email'
      className="block  text-sm font-medium leading-6 text-gray-900">Email:</label>
      <input value={email} id='email' name='email' type='email' onChange={handleChange} className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <div>
      <label htmlFor='password'
      className="block text-sm  font-medium leading-6 text-gray-900">Password:</label>
      <input value={password} id='password' name='password' type='password' onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <Link href={'./login'}>
     <button type='submit' className='mt-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleSubmit}>submit</button>
     </Link>
     <p className="mt-10 text-center text-sm text-gray-500">
           Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log In
            </Link>
          </p>
     
    </form>
    </div>
    </div>
  )
}

export default Signup