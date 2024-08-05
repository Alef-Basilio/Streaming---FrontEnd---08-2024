"use client";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import slidesX from "../../../public/slidesX";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../slide.css";

var slides = slidesX;

export default function Slide() {
    return (
        <section className="flex flex-col justify-center items-center w-full text-white">
            <h1 className="w-[1000px] text-[25px] mb-8">Click to see information:</h1>
            <Swiper slidesPerView={3} navigation className="h-[180px] w-[1000px]">
                <SwiperSlide>
                    <img src={slides[0].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[1].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[2].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[3].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[4].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[5].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[6].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[7].url} alt="" className="h-full w-[320px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}