import BackBtn from "@/components/ui/BackBtn";
import { GetSingleTeamMember } from "@/server/admin/team/get/action";
import Image from "next/image"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const member = await GetSingleTeamMember(Number(id))

    return (
        <div className="p-5">
            <div className='m-5 flex justify-start'>
                <BackBtn />
            </div>

            <div
                className="group parent-line-animate relative rotate-0 hover:sm:rotate-1 rounded-2xl overflow-hidden 
        p-3 border-b 
        hover:border-b-transparent hover:scale-105 hover:shadow-lg hover:shadow-[#dd4292b0] transition-all duration-300
        hover:bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30
        flex flex-col gap-2 bg-black/50 max-w-120 mx-auto mt-10 
        ">
                <span className="line-animate"></span>
                <div className="relative w-full h-100">
                    <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        className="object-contain rounded-t-md"
                    />
                </div>
                <div>
                    <h2 className="font-bold text-xl">{member.name}</h2>
                    <p className="text-white/70 font-normal">{member.position}</p>
                </div>
            </div>
        </div>
    )
}

export default page