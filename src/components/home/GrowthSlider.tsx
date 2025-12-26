"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const data = [
    {
        id: 1,
        imageUrl: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
        id: 2,
        imageUrl: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
    },
    {
        id: 3,
        imageUrl: "https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 4,
        imageUrl: "https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        imageUrl: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
        id: 6,
        imageUrl: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
    },
]

const GrowthSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                freeMode={true}
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                                <Image src={item.imageUrl} alt="image" fill />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default GrowthSlider;