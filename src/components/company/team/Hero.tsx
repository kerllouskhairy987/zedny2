import TextType from "@/components/reactBits/TypingText"
import Image from "next/image"

const data = [
    {
        src: "https://st.zedny.me/stream/site/zedny/team/baz.jpg",
        alt: "Mohamed Youssef Elbaz",
        name: "Mohamed Youssef Elbaz",
        position: "Founder & CEO",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/basil.jpg",
        alt: "Basil Khattab",
        name: "Basil Khattab",
        position: "CCO",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/wahhab.jpg",
        alt: "Mohamed A. Wahhab",
        name: "Mohamed A. Wahhab",
        position: "Strategy and Transformation Officer",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/tawab1.jpg",
        alt: "Mohamed A. Tawab",
        name: "Mohamed A. Tawab",
        position: "CTO",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/sam.jpg",
        alt: "Sam Eissa",
        name: "Sam Eissa",
        position: "CPO",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/Saeed.jpg",
        alt: "Saeed Ahmed",
        name: "Saeed Ahmed",
        position: "CAO",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/khaledIsmael.jpg",
        alt: "Khaled Ismael",
        name: "Khaled Ismael",
        position: "Finance",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/yomna.jpg",
        alt: "Yomna Elemary",
        name: "Yomna Elemary",
        position: "Content",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/misallam.jpg",
        alt: "Abdulrahman Mohamed",
        name: "Abdulrahman Mohamed",
        position: "AI",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/ghareeb.jpg",
        alt: "Mahmoud Ghareeb",
        name: "Mahmoud Ghareeb",
        position: "Deep Learning",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/khaled.jpg",
        alt: "Khaled Ibrahim",
        name: "Khaled Ibrahim",
        position: "Head of Customer Success",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/yasmine.jpg",
        alt: "Yasmin Mohamed",
        name: "Yasmin Mohamed",
        position: "Customer Success",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/zahwa.jpg",
        alt: "Zahwa Selim",
        name: "Zahwa Selim",
        position: "Front End",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/sara.jpg",
        alt: "Sara Essam",
        name: "Sara Essam",
        position: "Digital Marketing Specialist",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/yasmine.jpg",
        alt: "Yasmin Tareq",
        name: "Yasmin Tareq",
        position: "PR",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/ali.jpg",
        alt: "Ali Gamal",
        name: "Ali Gamal",
        position: "Sr Front End",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/amani.jpg",
        alt: "Amani Atteya",
        name: "Amani Atteya",
        position: "Tester",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/abdullah.jpg",
        alt: "Abdullah Hassan",
        name: "Abdullah Hassan",
        position: "Sr. Back End",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/dalia.jpg",
        alt: "Dalia Saeed",
        name: "Dalia Saeed",
        position: "Sr. Front End",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/akram.jpg",
        alt: "Akram Ali",
        name: "Akram Ali",
        position: "Head of Media",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/alaa.jpg",
        alt: "Alaa Kamal",
        name: "Alaa Kamal",
        position: "Sound Engineer",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/mona.jpg",
        alt: "Mona El Saeed",
        name: "Mona El Saeed",
        position: "Animator",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/sheriff.jpg",
        alt: "Sherif Gabriel",
        name: "Sherif Gabriel",
        position: "Media Producer",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/fatima.jpg",
        alt: "Fatima Tari",
        name: "Fatima Tari",
        position: "Ececutive Assistant & PR",
    },
    {
        src: "https://st.zedny.me/stream/site/zedny/team/eslam.jpg",
        alt: "Eslam Khaled",
        name: "Eslam Khaled",
        position: "Devops",
    },
]

const Hero = () => {
    return (
        <main className="section-gap relative z-100">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-4 order-2 md:order-1">
                        <h1 className="gradient-text-color text-start! text-4xl flex flex-col gap-2 md:text-5xl font-bold">
                            <TextType text={[`Our Executive Team`, `Our Executive Team`]} typingSpeed={100} />
                        </h1>
                        <p className="mb-1 text-xl text-white/60">Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.</p>
                    </div>

                    <div className="relative w-full h-75 order-1 lg:order-2">
                        <Image
                            src={'https://zedny.com/assets/images/team.png'}
                            alt="image hero business page"
                            fill
                            className="object-contain animate-bounce hover:animate-none border"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-20">
                    {
                        data.map((item, idx) => (
                            <div key={idx}
                                className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden p-3 border-b 
                            hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
                            hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
                            flex flex-col gap-2 bg-black/50
                            ">
                                <span className="line-animate"></span>
                                <div className="relative w-full h-96">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover rounded-t-md"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-bold text-xl">{item.name}</h2>
                                    <p className="text-white/70 font-normal">{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
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
        </main>
    )
}

export default Hero