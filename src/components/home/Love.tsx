"use client";

import { VerticalInfiniteSliderToBottom, VerticalInfiniteSliderToTop } from "./slider/experts/Slider"

const Love = () => {
    return (
        <section className="section-gap relative">
            <div data-aos="fade-right" className="container text-center flex flex-col gap-2">
                <h2 className="font-bold text-3xl">Wall Of <span className="gradient-text-color">Love</span></h2>
                <p className="text-white/70">What other people are saying about Zedny</p>
            </div>

            <div id="border_animation" className="rounded-none! mt-10 border-none!">
                <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <VerticalInfiniteSliderToTop />
                <VerticalInfiniteSliderToBottom className="hidden! sm:block!" />
                <VerticalInfiniteSliderToTop className="hidden! lg:block!" />
                </div>
            </div>
            <div className="
                w-full h-175 md:w-150 md:h-150
                rounded-[21%_79%_57%_43%/19%_74%_26%_81%]
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                -z-10
                bg-linear-to-r from-pink-200/20 to-purple-500/20
                blur-3xl
            " />
        </section >
    )
}

export default Love