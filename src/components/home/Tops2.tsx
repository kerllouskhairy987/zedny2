"use client";

import { Book, Home } from "lucide-react";
import { TopicsSliderComponent } from "./slider/topics/TopicsSliderComponent";
import LogoLoop from "../reactBits/LoopSlider";

const topicsComponent = [
    {
        node: (
            <TopicsSliderComponent
                title="Emotional Intelligence"
                desc="Unlock the power of Emotional Intelligence and become a better leader, manager, and team player."
                Icon={Home}
                url="https://zedny.com/assets/vector12.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Creative Writing"
                desc="Unlock your creativity and develop your writing skills, whether you're interested in fiction, non-fiction, or poetry."
                Icon={Home}
                url="https://zedny.com/assets/vector9.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Entrepreneurship"
                desc="Turn your business ideas into reality with courses on entrepreneurship, from business planning to marketing."
                Icon={Book}
                url="https://zedny.com/assets/vector10.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Emotional Intelligence"
                desc="Unlock the power of Emotional Intelligence and become a better leader, manager, and team player."
                Icon={Home}
                url="https://zedny.com/assets/vector13.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Emotional Intelligence"
                desc="Unlock the power of Emotional Intelligence and become a better leader, manager, and team player."
                Icon={Home}
                url="https://zedny.com/assets/vector12.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Creative Writing"
                desc="Unlock your creativity and develop your writing skills, whether you're interested in fiction, non-fiction, or poetry."
                Icon={Home}
                url="https://zedny.com/assets/vector9.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Entrepreneurship"
                desc="Turn your business ideas into reality with courses on entrepreneurship, from business planning to marketing."
                Icon={Book}
                url="https://zedny.com/assets/vector10.webp"
                alt="eng-image"
            />
        ),
    },
    {
        node: (
            <TopicsSliderComponent
                title="Sales Mastery"
                desc="Become a sales expert by mastering the art of persuasion, negotiation, and relationship-building in the sales process."
                Icon={Book}
                url="https://zedny.com/assets/vector11.webp"
                alt="eng-image"
            />
        ),
    }
];

const Tops2 = () => {

    return (
        <section>
            <div data-aos="fade-right" className="container">
                <div className="max-w-[250] flex flex-col gap-2">
                    <h2 className="gradient-text-color text-3xl font-semibold text-start!">Popular Topics</h2>
                    <p className="text-white/60">Explore a diverse array of learning resources designed to enhance your professional skills and personal growth.</p>
                </div>
            </div>

            <div className="py-10 w-full bg-transparent flex items-center relative overflow-hidden text-center">
                <LogoLoop
                    logos={topicsComponent}
                    speed={50}
                    direction="right"
                    logoHeight={10}
                    gap={40}
                    pauseOnHover
                    fadeOut
                />
            </div>
        </section>
    )
}

export default Tops2