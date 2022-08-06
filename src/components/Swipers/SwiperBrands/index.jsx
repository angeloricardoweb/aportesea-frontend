import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export function SwiperBrands() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}

                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        slidesPerGroup: 3
                    },
                    1120: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        slidesPerGroup: 5
                    }
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='swiper_brands'
            >

                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage />
                </SwiperSlide>

            </Swiper>
        </>
    );
}


const SwiperImage = (data) => {
    return (
        <div>
            <img src="/temp/logo-example.png" alt="lorem picsum" />
        </div>
    );
}

