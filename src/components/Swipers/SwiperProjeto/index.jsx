import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export function SwiperProjeto(projeto = []) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
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
                modules={[Pagination, Navigation]}
                className="swiper_projeto"
            >

                {projeto && React.Children.toArray(projeto.data.galeria.map((data) => (
                    <SwiperSlide>
                        <SwiperCardHistorico {...data} />
                    </SwiperSlide>
                )))}

            </Swiper>
        </>
    );
}


const SwiperCardHistorico = (data) => {
    return (
        <div>
            <img src={data.foto.url} alt="ok" />
        </div>
    );
}

