import Image from "next/image"
import { Delete, Eye, ShoppingCart } from "lucide-react"

const data = [
    {
        title: "Software Development",
        description: "Unlock the potential of your workforce by leveraging Zedny's tailored learning solutions.",
        imageUrl: "https://st.zedny.me/stream/site/zedny/instructors/319.png",
    },
    {
        title: "Software Engineering",
        description: "Unlock the potential of your workforce by leveraging Zedny's tailored learning solutions.",
        imageUrl: "https://st.zedny.me/stream/site/zedny/instructors/327.png",
    },
    {
        title: "Software Engineering",
        description: "Unlock the potential of your workforce by leveraging Zedny's tailored learning solutions.",
        imageUrl: "https://st.zedny.me/stream/site/zedny/instructors/327.png",
    },
    {
        title: "Data Science & Analytics",
        description: "Unlock the potential of your workforce by leveraging Zedny's tailored learning solutions.",
        imageUrl: "https://st.zedny.me/stream/site/zedny/instructors/321.png",
    }
]
const Tops = () => {
    return (
        <section>
            <div className="container">
                <div className="max-w-[250] flex flex-col gap-2">
                    <h2 className="gradient-text-color text-3xl font-semibold text-start!">Popular Topics</h2>
                    <p className="text-white/60">Explore a diverse array of learning resources designed to enhance your professional skills and personal growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                    {
                        data.map((item, idx) => (
                            <div key={idx} className="
                            group relative flex flex-col gap-4
                            after:content-['']
                            after:absolute after:left-0 after:bottom-0
                            md:after:h-0 after:w-full after:h-[calc(50%-20px)]
                            after:bg-[#dd4292]/30
                            after:z-1
                            after:transition-all after:duration-300
                            hover:after:h-[calc(50%-20px)]
                            rounded-md border-b text-center pb-5
                            overflow-hidden

                            hover:-translate-y-2
                            ">
                                <div className="relative w-full h-[200] bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="px-3 gradient-text-color text-xl">{item.title}</h3>
                                <p className="px-3 text-white/70">{item.description}</p>
                                <div className="absolute z-10 top-1/2 left-1/2 -translate-1/2 flex gap-5 duration-300 bg-[#dd4292]/70 px-5 h-10 items-center justify-center rounded-md w-fit opacity-100 md:opacity-0 group-hover:opacity-100">
                                    <Eye className="gradient-text-color cursor-pointer" />
                                    <Delete className="gradient-text-color cursor-pointer" />
                                    <ShoppingCart className="gradient-text-color cursor-pointer" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Tops