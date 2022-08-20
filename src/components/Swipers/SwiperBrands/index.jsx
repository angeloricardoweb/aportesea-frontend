import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSinglePrismicDocument } from '@prismicio/react'

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export function SwiperBrands() {
    const [response] = useSinglePrismicDocument('parceiros')
    console.log(response?.data.parceiros);
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
                {
                    response &&
                    React.Children.toArray(response.data.parceiros.map(parceiro => (
                        <SwiperSlide >
                            <SwiperImage {...parceiro} />
                        </SwiperSlide>

                    )))
                }

            </Swiper>
        </>
    );
}


const SwiperImage = (parceiro) => {
    return (
        <div>
            <img src={parceiro.image.url} alt={parceiro.nome}   />
        </div>
    );
}

