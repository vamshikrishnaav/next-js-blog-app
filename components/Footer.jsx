import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

      
        <Image
          src={assets.logo_light}
          alt="Blogger Logo"
          className="w-32"
        />

        
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Blogger. All rights reserved.
        </p>

        
        <div className="flex gap-4">
          <Image
            src={assets.facebook_icon}
            alt="Facebook"
            width={28}
            className="cursor-pointer hover:opacity-80 transition"
          />
          <Image
            src={assets.twitter_icon}
            alt="Twitter"
            width={28}
            className="cursor-pointer hover:opacity-80 transition"
          />
          <Image
            src={assets.googleplus_icon}
            alt="Google Plus"
            width={28}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
