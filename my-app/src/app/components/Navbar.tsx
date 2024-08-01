export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <ul className="flex justify-center">
                        <li className="flex justify-between items-center w-[1000px] bg-purple-500 text-white gap-14">
                            <div className="flex justify-center w-[20%]">
                                <img src="logoBlack.png" alt="logo_image" className="h-full w-[70px] cursor-pointer"/>
                            </div>
                            <div className="flex w-[80%] gap-[10%]">
                                <a href="" className="hover:text-black">Home</a>
                                <a href="" className="hover:text-black">Search</a>
                                <a href="" className="hover:text-black">Watchlist</a>
                                <a href="" className="hover:text-black">Movies</a>
                                <a href="" className="hover:text-black">Series</a>
                                <a href="/" className="hover:text-black">Go Out</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}