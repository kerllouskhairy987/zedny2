import Image from "next/image"
import Link from "next/link"
import { PowerFeatures } from "../../../../generated/prisma/client"
import { Eye, Pen } from "lucide-react"
import BtnDelete from "./delete/BtnDelete"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ProjectChart1, ProjectChart2 } from "../Charts"

type IProps = {
    projects: PowerFeatures[]
}

const ProjectList = ({ projects }: IProps) => {

    return (
        <div className="p-5 rounded-xl overflow-x-auto flex flex-col grow w-full mx-auto overflow-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProjectChart1 />
                <ProjectChart2 />
            </div>

            <Link href="/admin/project-list/create" className="ms-auto">
                <div className="pt-4 flex justify-end pb-10">
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
                        Create A New Project
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

            <Table className="overflow-x-auto ">
                <TableCaption>A list of all projects</TableCaption>
                <TableHeader className="overflow-auto">
                    <TableRow>
                        <TableHead className="border font-bold text-lg text-center w-25">ID</TableHead>
                        <TableHead className="border font-bold text-lg text-center min-w-37.5 max-w-125">Image</TableHead>
                        <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Title</TableHead>
                        <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Description</TableHead>
                        <TableHead className="border font-bold text-lg text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        projects && projects.length === 0
                            ? <TableRow><TableCell colSpan={5} className="border text-center font-bold text-xl text-red-500">no projects found</TableCell></TableRow>
                            : projects.map((project) => (
                                <TableRow key={project.id}>
                                    <TableCell className="border text-center font-medium">{project.id}</TableCell>
                                    <TableCell className="border text-center font-medium">
                                        <Image src={project.imageUrl} alt={project.title} width={100} height={100} className="object-center mx-auto" />
                                    </TableCell>
                                    <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                        {project.title}
                                    </TableCell>
                                    <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                        {project.desc}
                                    </TableCell>
                                    <TableCell className="text-center font-semibold flex justify-center gap-3">
                                        <Link href={`/admin/project-list/see/${project.id}`}>
                                            <Eye className="w-11 h-11 p-2 bg-[#47BFEB] text-black rounded-md cursor-pointer" />
                                        </Link>

                                        <BtnDelete id={project.id} />

                                        <Link href={`/admin/project-list/update/${project.id}`}>
                                            <Pen className="w-11 h-11 p-2 bg-green-500 text-black rounded-md cursor-pointer" />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-end">({projects.length}) project/s</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </div>
    )
}

export default ProjectList