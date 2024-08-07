"use client";

export default function Card({title, caption, desc}: {title: string, caption: string | null, desc: string}) {
    console.log(desc)

    return (
        <div className="card z-[100] hidden justify-center items-center fixed top-0 left-0 h-screen w-screen text-white 
        bg-black bg-opacity-60">
            <div className="flex flex-col justify-between h-fit w-[700px] bg-purple-500 p-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-between w-[100%]">
                        <h1 className="cardTitle">{title}</h1>
                        <span onClick={() => closeCard()} className="cursor-pointer">X</span>
                    </div>
                    <h2 className="cardCaption">{caption}</h2>
                </div>
                <div className="flex">
                    <img src="" alt="" className="cardImage h-[200px] w-fit"/>
                    <span className="cardDesc">{desc}</span>
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