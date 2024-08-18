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
    <section className='main p-6'>forgot</section>
  )
}

export default Forgot