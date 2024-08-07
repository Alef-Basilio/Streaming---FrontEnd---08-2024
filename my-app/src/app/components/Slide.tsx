"use client";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import slidesData from "../../../public/slidesData";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../slide.css";

var slideDirection = slidesData.slidesX;

export default function Slide() {
    const [slides, setSlides] = useState(slidesData.slidesX);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 600) {
            setSlides(slidesData.slidesY);
            slideDirection = slidesData.slidesX;
          } else {
            setSlides(slidesData.slidesX);
            slideDirection = slidesData.slidesY;
          }
        };
    
        const intervalId = setInterval(handleResize, 2000);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          clearInterval(intervalId);
          window.removeEventListener('resize', handleResize);
        };
      }, [slidesData]);

    return (
        <section className="flex flex-col justify-center items-center w-full text-white">
            <h1 className="w-[1000px] text-[25px] mb-8">Click to see information:</h1>
            <Swiper slidesPerView={3} navigation className="h-[180px] w-[1000px]">
                <SwiperSlide>
                    <img src={slides[0].url} alt="" onClick={() => handleClick(0)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[1].url} alt="" onClick={() => handleClick(1)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[2].url} alt="" onClick={() => handleClick(2)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[3].url} alt="" onClick={() => handleClick(3)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[4].url} alt="" onClick={() => handleClick(4)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[5].url} alt="" onClick={() => handleClick(5)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[6].url} alt="" onClick={() => handleClick(6)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[7].url} alt="" onClick={() => handleClick(7)} className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

function handleClick(num: number) {
    const card = document.getElementsByClassName("card")[0];
    const cardTitle = document.getElementsByClassName("cardTitle")[0];
    const cardCaption = document.getElementsByClassName("cardCaption")[0];
    const cardImage = document.getElementsByClassName("cardImage")[0];
    const cardDesc = document.getElementsByClassName("cardDesc")[0];

    cardTitle.textContent = slidesData.slidesInfo[num].title;
    cardCaption.textContent = slidesData.slidesInfo[num].caption;
    cardImage.setAttribute("src", slideDirection[num].url);
    cardDesc.textContent = slidesData.slidesInfo[num].desc;
    
    card.classList.toggle("hidden");
    card.classList.toggle("flex");
}