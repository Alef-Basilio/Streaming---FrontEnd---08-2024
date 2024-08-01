"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center h-[330px] w-[300px] bg-purple-500 rounded-sm gap-4">
          <div>
            <img src="logoBlack.png" alt="logo_image" className="h-[200px] w-full cursor-pointer"/>
          </div>
          <Link href="/mainPage" className="flex justify-center items-center h-[50px] w-[120px] text-white hover:text-black border
          hover:border-black rounded-sm cursor-pointer">
            Go In
          </Link>
        </div>
      </nav>
    </>
  );
}