"use client";

import LogoLoop from "../reactBits/LoopSlider";
import { ExpertsSliderComponent } from "./slider/experts/ExpertsSliderComponent";

const imageComponent = [
    {
        node: (
            <ExpertsSliderComponent
                url="https://st.zedny.me/stream/site/zedny/instructors/319.png"
                alt="eng-image"
                name="Eng Mohamed"
            />
        ),
    },
    {
        node: (
            <ExpertsSliderComponent
                url="https://st.zedny.me/stream/site/zedny/instructors/321.png"
                alt="eng-image"
                name="Eng sara"
            />
        ),
    },
    {
        node: (
            <ExpertsSliderComponent
                url="https://st.zedny.me/stream/site/zedny/instructors/318.png"
                alt="eng-image"
                name="Eng sara"
            />
        ),
    },
    {
        node: (
            <ExpertsSliderComponent
                url="https://st.zedny.me/stream/site/zedny/instructors/341.png"
                alt="eng-image"
                name="Eng sara"
            />
        ),
    },
    {
        node: (
            <ExpertsSliderComponent
                url="http://st.zedny.me/stream/site/zedny/team/dalia.jpg"
                alt="eng-image"
                name="Eng Sr: Dalia"
            />
        ),
    },
    {
        node: (
            <ExpertsSliderComponent
                url="https://st.zedny.me/stream/site/zedny/instructors/327.png"
                alt="eng-image"
                name="Eng sara"
            />
        ),
    },
];

const Experts2 = () => {
    return (
        <section className="py-45 relative grow px-4 md:px-8 bg-center bg-no-repeat bg-contain bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
            <div
                className="absolute left-0 right-0 top-0 h-40 z-5 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, #030303, #030303, #030303,#120C10, transparent)",
                }}
            />

            <div className="text-center flex flex-col gap-2 max-w-125 mx-auto">
                <h2 className="text-3xl font-bold">
                    Our <span className="gradient-text-color">Experts</span>
                </h2>
                <p className="text-lg text-white/70">
                    Choose from a diverse range of instructors with different cultural
                    backgrounds, and teaching approaches.
                </p>
            </div>


            <div className="py-10 w-full bg-transparent flex items-center relative overflow-hidden text-center">
                <LogoLoop
                    logos={imageComponent}
                    speed={50}
                    direction="right"
                    logoHeight={10}
                    gap={40}
                    pauseOnHover
                    fadeOut
                    fadeOutColor="transparent"
                />
                <LogoLoop
                    logos={imageComponent}
                    speed={50}
                    direction="left"
                    logoHeight={10}
                    gap={40}
                    pauseOnHover
                    fadeOut
                    className="hidden md:block"
                    fadeOutColor="transparent"
                />
            </div>

            <div
                className="absolute left-0 right-0 bottom-0 h-40 z-5 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent, #120C10, #030303, #030303, #030303)",
                }}
            />
        </section>
    );
};

export default Experts2;
