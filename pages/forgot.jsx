import React, {useEffect} from 'react'
import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      router.push('/')
    }
  })
  return (
    <div className='main'>forgot</div>
  )
}

export default Forgot