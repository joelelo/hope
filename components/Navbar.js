import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const pos = window.scrollY;
    setScroll(pos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={
        scroll > 10
          ? "sm:p-auto fixed z-30 flex h-fit w-screen justify-start space-x-4 bg-vin1 pt-1 pb-2 text-white lg:pl-20"
          : "sm:p-auto fixed z-50 flex h-fit w-screen justify-start space-x-4 bg-vin1 pt-1 pb-2 text-white sm:text-vin2 lg:bg-transparent lg:pl-20"
      }
    >
      <Link href="#">
        <a className="h-full w-fit p-2 text-2xl font-extralight hover:bg-vin2 hover:text-white sm:text-2xl lg:text-4xl">
          Home
        </a>
      </Link>
      <Link href="#schedule">
        <a
          className="h-full w-fit p-2 text-2xl font-extralight hover:bg-vin2 hover:text-white sm:text-2xl lg:text-4xl"
          href="#schedule"
        >
          Schedule
        </a>
      </Link>
      <Link href="#about">
        <a
          className="h-full w-fit p-2 text-2xl font-extralight hover:bg-vin2 hover:text-white sm:text-2xl lg:text-4xl"
          href="#about"
        >
          About us
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
