export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <ul className="flex justify-center">
                        <li className="flex justify-evenly items-center xl:h-[70px] mm:h-[60px] xl:w-[1250px] 
                        lg:w-[1000px] sm:w-[90%] mm:w-[100%] bg-gradient-to-r from-fuchsia-600 to-purple-600 
                        text-white">
                            <div className="sm:flex justify-center items-center xl:w-[20%] sm:w-[15%] mm:hidden">
                                <img src="logoBlack.png" alt="logo_image" className="mm:h-full xl:w-[70px] sm:w-[60px]
                                cursor-pointer"/>
                            </div>
                            <div className="flex justify-around items-center xl:w-[80%] sm:w-[85%] mm:w-[100%]">
                                <a href="" className="hover:text-[#222] xl:text-[17px] mm:text-[15px] p-1">Home</a>
                                <a href="" className="hover:text-[#222] xl:text-[17px] mm:text-[15px] p-1">Search</a>
                                <a href="" className="sm:flex mm:hidden hover:text-[#222] xl:text-[17px] mm:text-[15px] 
                                p-1">
                                Watchlist
                                </a>
                                <a href="" className="hover:text-[#222] xl:text-[17px] mm:text-[15px] p-1">Movies</a>
                                <a href="" className="hover:text-[#222] xl:text-[17px] mm:text-[15px] p-1">Series</a>
                                <a href="/" className="hover:text-red-700 xl:text-[17px] mm:text-[15px] border 
                                rounded-full border-transparent hover:border-red-500 p-1">Go Out</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}