
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Myaccount = ({login}) => {
  const router = useRouter();
  useEffect(()=>{
    // if(!localStorage.getItem("token")){
    //   router.push('/login')
    // }
    if(!login){
      router.push('/login')
    }
  }, [])
  return (
    <div>myaccount</div>
  )
}

export default Myaccount