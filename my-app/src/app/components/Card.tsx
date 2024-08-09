"use client";

export default function Card({title, caption, desc}: {title: string, caption: string | null, desc: string}) {
    return (
        <div className="card z-[100] hidden justify-center items-center fixed top-0 left-0 h-screen w-screen 
        text-white bg-black bg-opacity-60">
            <div className="flex flex-col justify-between lg:h-[600px] sm:h-[80%] mm:h-full lg:w-[700px] sm:w-[80%] 
            mm:w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 sm:p-10 sm:pt-3 mm:p-2">
                <div className="flex flex-col justify-center items-center mm:mb-1">
                    <div className="flex justify-end w-full">
                        <span onClick={() => closeCard()} className="flex justify-center items-center sm:h-[45px] 
                        mm:h-[40px] sm:w-[45px] mm:w-[40px] sm:text-[30px] mm:text-[25px] text-tertiary 
                        hover:bg-secondary font-bold rounded-full cursor-pointer">X</span>
                    </div>
                    <h1 className="cardTitle sm:text-[30px] mm:text-[22px] font-bold">{title}</h1>
                    <h2 className="cardCaption sm:text-[22px] mm:text-[18px] mm:mb-1">{caption}</h2>
                </div>
                <div className="flex lg:flex-row mm:flex-col lg:justify-evenly mm:items-center w-full gap-4 lg: mm:mb-4">
                    <img src="" alt="" className="cardImage lg:h-fit sm:h-[250px] lg:w-[30%] md:w-[500px] sm:w-full 
                    mm:w-[90%] mm:mb-1"/>
                    <span className="cardDesc flex justify-center sm:w-full mm:w-[90%] xl:text-[17px] 
                    mm:text-[15px]">{desc}</span>
                </div>
                <div className="flex sm:justify-end mm:justify-center w-full">
                    <a href="" className="flex justify-center items-center h-[50px] w-[100px] xl:text-[17px] 
                    mm:text-[15px] hover:bg-secondary font-bold rounded-full cursor-pointer
                    animate-pulse">
                    Watch Now
                    </a>
                </div>
            </div>
        </div>
    )
}

function closeCard() {
    const card = document.getElementsByClassName("card")[0];
    card.classList.toggle("hidden");
    card.classList.toggle("flex");
}