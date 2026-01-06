import Image from "next/image"

const dataFeatures = [
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-three.png",
        alt: "image",
        title: "1. Diverse Course Catalogue:",
        desc: "Explore a vast array of courses, from coding to public speaking, tailored to your interests. Feed your curiosity and broaden your skillset."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-one.png",
        alt: "image",
        title: "2. User-Friendly Learning Platform:",
        desc: "Zedny's intuitive platform ensures that learning is accessible to everyone. No more complex interfaces or frustrating navigation."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-two.png",
        alt: "image",
        title: "3. Expert Instructors:",
        desc: "Learn from industry experts who share their real-world experiences. Benefit from their insights and wisdom."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-three.png",
        alt: "image",
        title: "4. Flexibility in Learning:",
        desc: "Study at your own pace, whether you're a night owl or an early bird. Fit learning into your busy schedule."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-one.png",
        alt: "image",
        title: "5. Gamified Learning:",
        desc: "Make learning fun with gamified elements and interactive lessons. Earn badges and rewards as you progress."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for_indivedule/cover-card-two.png",
        alt: "image",
        title: "6. Career Advancement:",
        desc: "Acquire new skills or certifications to boost your career prospects. Stay competitive and adaptable in a rapidly changing job market."
    },
]

const Help = () => {
    return (
        <section className="section-gap container relative">
            <div className="flex flex-col gap-4">
                <h2 data-aos="fade-right" className="font-bold text-xl sm:text-3xl">HOW WE <span className="gradient-text-color">HELP</span></h2>
                <p data-aos="fade-right" className="text-white/60 text-lg">Individuals seeking to boost their careers or acquire new skills need not look further than Zedny. With a delightful blend of creativity and professionalism, Zedny&apos;s solutions make learning an exciting journey. Here&apos;s how Zedny can transform your personal and professional life, one step at a time.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
                    {
                        dataFeatures.map((item, idx) => (
                            <div
                                data-aos="fade-up"
                                key={idx}
                                className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden 
                                        p-3 border-b 
                                        hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                                        hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                                        flex flex-col gap-2 bg-black/50
                                        ">
                                <span className="line-animate"></span>

                                <div className="relative w-full h-40 overflow-hidden rounded-[71%_29%_80%_20%/21%_84%_16%_79%] group-hover:rounded-md duration-300 
                                bg-white
                                ">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>

                <p data-aos="fade-right" className="text-white/90 text-xl mt-10">
                    Learning is more enjoyable when you&apos;re part of a like-minded group. In conclusion, Zedny offers a vibrant and engaging platform for both businesses and individuals to thrive in their respective domains. Whether you&apos;re an organization seeking to empower your workforce or an individual eager to achieve personal and professional growth, Zedny&apos;s creative and effective solutions are your gateway to success. Embrace the future of learning with Zedny and unlock your full potential.
                </p>
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
        </section>
    )
}

export default Help