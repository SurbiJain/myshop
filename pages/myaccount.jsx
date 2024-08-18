import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Myaccount = ({ login }) => {
  const router = useRouter();
  useEffect(() => {
    // if(!localStorage.getItem("token")){
    //   router.push('/login')
    // }
    if (!login) {
      router.push("/login");
    }
  }, []);
  return <section className="main p-6">myaccount</section>;
};

export default Myaccount;
