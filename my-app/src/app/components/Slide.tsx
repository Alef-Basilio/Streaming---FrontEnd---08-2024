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
        <>
            <Swiper slidesPerView={4} navigation className="h-[180px] w-[1000px]">
                <SwiperSlide>
                    <img src={slides[0].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[1].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[2].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[3].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[4].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[5].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[6].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slides[7].url} alt="" className="h-full w-[240px] mx-1.5 cursor-pointer"/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}