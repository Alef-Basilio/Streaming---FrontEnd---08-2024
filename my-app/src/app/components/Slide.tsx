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

var cardImgDirection = slidesData.slidesY;

export default function Slide() {
    const [slides, setSlides] = useState(slidesData.slidesX);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlides(slidesData.slidesY);
                setSlidesPerView(2);
                cardImgDirection = slidesData.slidesX;
            } else if (window.innerWidth < 800) {
                setSlides(slidesData.slidesY);
                setSlidesPerView(2.5);
                cardImgDirection = slidesData.slidesX;
            } else if (window.innerWidth < 1024) {
                setSlides(slidesData.slidesY);
                setSlidesPerView(3);
                cardImgDirection = slidesData.slidesX;
            } else if (window.innerWidth < 1280) {
                setSlides(slidesData.slidesX);
                setSlidesPerView(3);
                cardImgDirection = slidesData.slidesY;
            } else {
                setSlides(slidesData.slidesX);
                setSlidesPerView(3.5);
                cardImgDirection = slidesData.slidesY;
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
        <section className="flex flex-col justify-center items-center w-full text-white md:mb-12 sm:mb-24 mm:mb-48">
            <h1 className="xl:w-[1250px] lg:w-[1000px] mm:w-[90%] md:text-[25px] mm:text-[20px] font-bold sm:mb-3 mm:mb-6">
            Click to see the information:
            </h1>
            <Swiper slidesPerView={slidesPerView} navigation className="lg:h-[210px] mm:h-[230px] xl:w-[1250px] 
            lg:w-[1000px] mm:w-[90%]">
                <SwiperSlide>
                    <img src={slides[0].url} alt="" onClick={() => handleClick(0)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[1].url} alt="" onClick={() => handleClick(1)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[2].url} alt="" onClick={() => handleClick(2)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[3].url} alt="" onClick={() => handleClick(3)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[4].url} alt="" onClick={() => handleClick(4)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[5].url} alt="" onClick={() => handleClick(5)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[6].url} alt="" onClick={() => handleClick(6)} className="img h-[100%] 
                    cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[7].url} alt="" onClick={() => handleClick(7)} className="img h-[100%] 
                    cursor-pointer"/>
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
    cardImage.setAttribute("src", cardImgDirection[num].url);
    cardDesc.textContent = slidesData.slidesInfo[num].desc;
    
    card.classList.toggle("hidden");
    card.classList.toggle("flex");
}