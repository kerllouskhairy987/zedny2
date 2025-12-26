import DomeGallery from "../reactBits/DomeGallery"

const images = [
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/333.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/332.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/327.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/321.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/317.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/326.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/318.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/325.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/341.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/322.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/330.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/329.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/331.png",
        alt: "Khairy",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/instructors/340.png",
        alt: "Khairy",
    },
]

const Experts = () => {
    return (
        <section className="section-gap">
            <div>
                <div className="text-center flex flex-col gap-2 max-w-125 mx-auto">
                    <h2 className="text-3xl font-bold">Our <span className="gradient-text-color">Experts</span></h2>
                    <p className="text-lg text-white/70">Choose from a diverse range of instructors with different cultural backgrounds, and teaching approaches.</p>
                </div>

                <div className="w-full h-screen bg-center bg-no-repeat bg-contain bg-linear-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"
                >
                    <DomeGallery
                        images={images}
                        imageBorderRadius={'6px'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Experts