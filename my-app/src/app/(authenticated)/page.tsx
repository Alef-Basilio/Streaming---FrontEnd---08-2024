"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center sm:h-[330px] mm:h-[300px] sm:w-[300px] 
        mm:w-[250px] bg-gradient-to-r from-fuchsia-600 to-purple-600 sm:pb-0 mm:pb-4 rounded-sm gap-4">
          <div>
            <img src="logoBlack.png" alt="logo_image" className="h-[200px] w-full cursor-pointer"/>
          </div>
          <Link href="/mainPage" className="flex justify-center items-center sm:h-[50px] mm:h-[40px] sm:w-[120px]
          mm:w-[100px] text-white hover:text-[#222] hover:bg-secondary active:bg-purple-900 border 
          hover:border-[#222] rounded-sm cursor-pointer">
          Go In
          </Link>
        </div>
      </nav>
    </>
  );
}