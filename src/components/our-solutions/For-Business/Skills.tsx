import Image from "next/image"

const dataFeatures = [
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "1. Customized Corporate Training:",
        desc: "Zedny crafts bespoke training programs to address your organization's specific needs. Engage your workforce with interactive and engaging courses designed for maximum retention."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "2. Leadership Development:",
        desc: "Zedny helps nurture leaders from within your ranks through leadership training modules. Develop strong, capable leaders to guide your organization through every challenge."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "3. Technical Proficiency:",
        desc: "Stay ahead of industry trends with Zedny's technical training programs. Equip your team with the latest skills and tools they need to excel."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "4. Soft Skills Enhancement:",
        desc: "Foster effective communication, teamwork, and problem-solving skills among your employees. Create a more harmonious and productive workplace."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "5. Business Growth Strategies:",
        desc: "Zedny offers insights into strategic planning, market analysis, and growth hacking. Chart a course for your business's expansion and success."
    },
    {
        src: "https://zedny.com/assets/images/miscallenousPages/our-solutions/for-business/card-two.png",
        alt: "image",
        title: "6. Cutting-Edge Learning Technology:",
        desc: "Zedny employs innovative tech like AI-driven assessments and immersive simulations. Keep your team engaged with state-of-the-art learning experiences."
    },
]

const Skills = () => {
    return (
        <section className="section-gap container relative">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl sm:text-3xl">Elevate Your <span className="gradient-text-color">Skills</span>, Expand Your Horizons, and Conquer Tomorrow. All with Zedny.</h2>
                <p className="text-white/60 text-lg">Zedny is the go-to partner, trusted by both seasoned CIOs and newcomers to the L&D world. Our team of experts crafts customized solutions that precisely match your current needs and future aspirations. We stand out as the sole partner capable of enhancing your teams and product development simultaneously.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
                    {
                        dataFeatures.map((item, idx) => (
                            <div key={idx}
                                className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden 
                                        p-3 border-b 
                                        hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                                        hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                                        flex flex-col gap-2 bg-black
                                        ">
                                <span className="line-animate"></span>

                                <div className="relative w-12 h-12 overflow-hidden rounded-[71%_29%_80%_20%/21%_84%_16%_79%] group-hover:rounded-md duration-300 
                                bg-white
                                ">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-14 mx-auto">
                    <button
                        className="
                                group relative px-8 py-3 rounded-full
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                    >
                        Book a Demo
                        <div
                            className=" rounded-full p-1 bg-white/20 group-hover:bg-white/4 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="black"
                            />
                        </div>
                    </button>
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
        </section>
    )
}

export default Skills