import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto m-6">
      <hr class="my-4 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center ">
        © 2024 <Link href="/about">My Shop™</Link>. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
