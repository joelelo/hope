import React from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex w-full flex-col bg-vin1 py-5 text-center text-5xl text-white">
        Hope Atmosfir Radio
      </div>
      <div className="flex ">
        <div className="flex w-full flex-col bg-vin2  text-2xl text-white">
          <div className=" m-auto flex flex-row">
            <AiFillPhone className="mt-1.5" />
            Contact Us: +620000000
          </div>
        </div>
        <div className="flex w-full flex-col bg-vin2  text-2xl text-white">
          <Link href="#">
            <a className=" m-auto flex flex-row ">
              <AiFillFacebook className="mt-1.5" /> FB Name
            </a>
          </Link>
          <Link href="#">
            <a className=" m-auto flex flex-row">
              <AiFillTwitterCircle className="mt-1.5" /> TW Name
            </a>
          </Link>
          <Link href="#">
            <a className=" m-auto flex flex-row ">
              <AiFillInstagram className="mt-1.5" /> IG Name
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
