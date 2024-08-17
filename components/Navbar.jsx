import React, { useState } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Navbar = ({ user, key, logOut }) => {
  const { cart } = useSelector((state) => {
    return state.cart;
  });
  const cartQuantity = cart
  .map((item) => item.quantity)
  .reduce((prevValue, currValue) => prevValue + currValue, 0);
  const router = useRouter()
  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };



  return (
    <nav className="flex flex-col md:flex-row items-center bg-white justify-between md:justify-start   shadow-md h-20 sticky top-0 z-10">
      <Link href={"/"} className="logo mx-5">
        <img
          width={100}
          src="https://www.codeswear.com/_next/image?url=%2Flogo.png&w=640&q=75"
          alt="myiamge"
        />
      </Link>
      <div className="nav md:self-center self-start md:m-0 m-4">
        <ul className="flex space-x-10 font-bold md:ml-20  ">
          <Link href={"/about"}>
            <li>About us</li> 
          </Link>
          <Link href={"/tshirts"}>
            <li>T-shirts</li>
          </Link>
          <Link href={"/contact"}>
            {" "}
            <li>Enquire</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 cart absolute right-0 top-8 md:top-5 mx-5" onMouseLeave={()=>setDropDown(false)}>
        {user.value ? (
          <MdAccountCircle
            onMouseOver={()=>setDropDown(true)}
            className="text-4xl"
          />
        ) : (
          <Link href={"/login"}>
            <button className="border px-2 py-1 bg-black text-white rounded-md">LogIn</button>
          </Link>
        )}
        <div className="relative top-0 right-0">
        <FaCartShopping onClick={()=>{router.push('/cart')}} className="text-4xl " />
        <div className="absolute text-white  text-[10px] pt-1 top-0 right-3">{cartQuantity}</div>
        </div>
        {dropDown && (
          <div className="absolute w-36 right-14 px-5 rounded-md top-8 bg-gray-100 border shadow-lg">
            <ul>
              <Link href={"/myaccount"}>
                {" "}
                <li className="py-1 hover:text-pink-700  text-sm">
                  My Account
                </li>
              </Link>

              <Link href={"/orders"}>
                {" "}
                <li className="py-1 hover:text-pink-700  text-sm">Orders</li>
              </Link>
              <Link href={"/login"}>
                {" "}
                <li className="py-1 hover:text-pink-700  text-sm">
                  <button onClick={logOut}>LogOut</button>
                </li>{" "}
              </Link>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
