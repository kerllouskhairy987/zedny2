import DeleteTeamMemberBtn from "@/components/admin/team/delete/DeleteTeamMemberBtn"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GetAllTeamMembers } from "@/server/admin/team/get/action"
import { Eye, Pen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// const teamMembers = [
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/baz.jpg",
//         name: "Mohamed Youssef Elbaz",
//         position: "Founder & CEO",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/basil.jpg",
//         name: "Basil Khattab",
//         position: "CCO",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/wahhab.jpg",
//         name: "Mohamed A. Wahhab",
//         position: "Strategy and Transformation Officer",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/tawab1.jpg",
//         name: "Mohamed A. Tawab",
//         position: "CTO",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/sam.jpg",
//         name: "Sam Eissa",
//         position: "CPO",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/Saeed.jpg",
//         name: "Saeed Ahmed",
//         position: "CAO",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/khaledIsmael.jpg",
//         name: "Khaled Ismael",
//         position: "Finance",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/yomna.jpg",
//         name: "Yomna Elemary",
//         position: "Content",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/misallam.jpg",
//         name: "Abdulrahman Mohamed",
//         position: "AI",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/ghareeb.jpg",
//         name: "Mahmoud Ghareeb",
//         position: "Deep Learning",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/khaled.jpg",
//         name: "Khaled Ibrahim",
//         position: "Head of Customer Success",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/yasmine.jpg",
//         name: "Yasmin Mohamed",
//         position: "Customer Success",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/zahwa.jpg",
//         name: "Zahwa Selim",
//         position: "Front End",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/sara.jpg",
//         name: "Sara Essam",
//         position: "Digital Marketing Specialist",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/yasmine.jpg",
//         name: "Yasmin Tareq",
//         position: "PR",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/ali.jpg",
//         name: "Ali Gamal",
//         position: "Sr Front End",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/amani.jpg",
//         name: "Amani Atteya",
//         position: "Tester",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/abdullah.jpg",
//         name: "Abdullah Hassan",
//         position: "Sr. Back End",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/dalia.jpg",
//         name: "Dalia Saeed",
//         position: "Sr. Front End",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/akram.jpg",
//         name: "Akram Ali",
//         position: "Head of Media",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/alaa.jpg",
//         name: "Alaa Kamal",
//         position: "Sound Engineer",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/mona.jpg",
//         name: "Mona El Saeed",
//         position: "Animator",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/sheriff.jpg",
//         name: "Sherif Gabriel",
//         position: "Media Producer",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/fatima.jpg",
//         name: "Fatima Tari",
//         position: "Ececutive Assistant & PR",
//     },
//     {
//         src: "https://st.zedny.me/stream/site/zedny/team/eslam.jpg",
//         name: "Eslam Khaled",
//         position: "Devops",
//     },
// ]

const page = async () => {
    const teamMembers = await GetAllTeamMembers()
    return (
        <section className="p-5 ">
            <Link href="/admin/team/create" className="flex justify-end w-fit ms-auto">
                <div className="pt-4 flex justify pb-10 ">
                    <button
                        className="
                                group relative px-8 py-3 rounded-md
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                    >
                        Create A New Member
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
            </Link>

            <div>
                <div>
                    <Table className="overflow-x-auto ">
                        <TableCaption>A list of all projects</TableCaption>
                        <TableHeader className="overflow-auto">
                            <TableRow>
                                <TableHead className="border font-bold text-lg text-center w-25">ID</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-37.5 max-w-125">Image</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Title</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Position</TableHead>
                                <TableHead className="border font-bold text-lg text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                teamMembers && teamMembers.length === 0
                                    ? <TableRow><TableCell colSpan={3} className="text-center font-bold text-xl text-red-500">no team members found</TableCell></TableRow>
                                    : teamMembers.map((member) => (
                                        <TableRow key={member.id}>
                                            <TableCell className="border text-center font-medium">{member.id}</TableCell>
                                            <TableCell className="border text-center font-medium">
                                                <Image src={member.src} alt={member.name} width={50} height={50} className="object-center mx-auto" />
                                            </TableCell>
                                            <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {member.name}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {member.position}
                                            </TableCell>
                                            <TableCell className="text-center font-semibold flex justify-center gap-3">
                                                <Link href={`/admin/team/see/${member.id}`}>
                                                    <Eye className="w-11 h-11 p-2 bg-[#47BFEB] text-black rounded-md cursor-pointer" />
                                                </Link>

                                                <DeleteTeamMemberBtn id={member.id} />

                                                <Link href={`/admin/team/update/${member.id}`}>
                                                    <Pen className="w-11 h-11 p-2 bg-green-500 text-black rounded-md cursor-pointer" />
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={4}>Total</TableCell>
                                <TableCell className="text-end">({teamMembers.length}) Member/s</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default page