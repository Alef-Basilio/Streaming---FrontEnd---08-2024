"use client";

export default function Card({title, caption, desc}: {title: string, caption: string | null, desc: string}) {
    return (
        <div className="card z-[100] hidden justify-center items-center fixed top-0 left-0 h-screen w-screen 
        text-white bg-black bg-opacity-60">
            <div className="flex flex-col justify-between lg:h-[600px] mm:h-[80%] lg:w-[700px] mm:w-[80%] 
            bg-gradient-to-r from-fuchsia-600 to-purple-600 p-10 pt-3">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-end w-full">
                        <span onClick={() => closeCard()} className="flex justify-center items-center h-[45px] 
                        w-[45px] text-[30px] text-[#222] hover:bg-secondary font-bold rounded-full 
                        cursor-pointer">X</span>
                    </div>
                    <h1 className="cardTitle sm:text-[30px] mm:text-[22px] font-bold">{title}</h1>
                    <h2 className="cardCaption sm:text-[22px] mm:text-[18px] mb-4">{caption}</h2>
                </div>
                <div className="flex lg:flex-row mm:flex-col lg:justify-evenly mm:items-center w-full lg:gap-0 
                mm:gap-4">
                    <img src="" alt="" className="cardImage lg:h-fit mm:max-h-[300px] lg:w-[30%] mm:w-full mm:max-w-[390px]"/>
                    <span className="cardDesc flex justify-center sm:w-[60%] mm:w-full xl:text-[17px] 
                    mm:text-[15px]">{desc}</span>
                </div>
                <div className="flex justify-end w-full">
                    <a href="" className="flex justify-center items-center h-[50px] w-[100px] xl:text-[17px] 
                    mm:text-[15px] hover:bg-secondary font-bold rounded-full cursor-pointer
                    animate-pulse">Watch Now</a>
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