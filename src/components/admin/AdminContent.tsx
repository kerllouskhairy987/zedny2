import { AlignEndHorizontal, BadgeDollarSign, Bitcoin, MoveDownRight, MoveUpRight, TableCellsMerge, Tally4, TrendingUp, UserIcon } from "lucide-react"
import { ChartLeft, ChartRight } from "./Charts"
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
import Image from "next/image"
import { PowerFeatures, Team, User } from "@prisma/client"

const data1 = [
    {
        name: "Market Cap",
        price: "$2475.39B",
        isUp: true,
        percent: 2.3,
        day: "vs yesterday",
        icon: <Tally4 />
    },
    {
        name: "Bitcoin Price",
        price: "$61284.23",
        isUp: true,
        percent: 4.2,
        day: "vs yesterday",
        icon: <Bitcoin />
    },
    {
        name: "Total Value Locked",
        price: "$46.89B",
        isUp: true,
        percent: 10.2,
        day: "vs yesterday",
        icon: <BadgeDollarSign />
    },
    {
        name: "24h Trading Volume",
        price: "$87.29B",
        isUp: false,
        percent: 2.8,
        day: "vs yesterday",
        icon: <AlignEndHorizontal />
    },
]

const data2 = [
    {
        name: "Solana",
        tech: "SOL",
        isUp: true,
        rate: 12.4,
        type: "project",
    },
    {
        name: "Render",
        tech: "RNDR",
        isUp: true,
        rate: 8.7,
        type: "project",
    },
    {
        name: "Arbitrum",
        tech: "ARB",
        isUp: false,
        rate: 3.2,
        type: "Platform",
    },
    {
        name: "Jupiter",
        tech: "JUP",
        isUp: false,
        rate: 15.3,
        type: "Platform",
    },
    {
        name: "Aptos",
        tech: "APT",
        isUp: true,
        rate: 9.1,
        type: "Project",
    },
    {
        name: "Mantle",
        tech: "MNT",
        isUp: true,
        rate: 4.3,
        type: "Platform",
    },
    {
        name: "Base",
        tech: "BASE",
        isUp: true,
        rate: 21.8,
        type: "Platform",
    },
]

interface IProps {
    projects: PowerFeatures[];
    teamMembers: Team[];
    users: User[]
}
const AdminContent = ({ projects, teamMembers, users }: IProps) => {
    return (
        <div className="p-5 ps-10 flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    data1.map((item, idx) => (
                        <div key={idx} className="rounded-xl p-3 flex flex-col gap-2 hover:scale-105 hover:rotate-1 duration-300 bg-[#0B111D]">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-sm">{item.name}</h2>
                                    <span className="text-2xl md:text-3xl font-semibold">{item.price}</span>
                                    <p>{item.isUp
                                        ? <span className="text-green-500 flex gap-1"><MoveUpRight /> +{item.percent}% <span className="text-white">{item.day}</span></span>
                                        : <span className="text-red-500 flex gap-1"><MoveDownRight /> -{item.percent}% <span className="text-white">{item.day}</span></span>
                                    }</p>
                                </div>
                                <p className="text-sm border p-2 rounded-md">{item.icon}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ChartLeft />
                <ChartRight />
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-lg bg-[#0B111D]">
                <h3 className="flex gap-1 text-xl items-center"><span className="text-[#00C2FF]"><TrendingUp /></span> Trending</h3>

                <div className="flex flex-wrap gap-4">
                    {
                        data2.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-start gap-4 bg-white/10 rounded-md p-5 border border-transparent hover:border-[#00C2FF] hover:scale-105 hover:rotate-1 duration-300">
                                <div className="flex flex-col gap-3 items-start">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                    <span className="text-sm">{item.tech}</span>
                                    <span className={`flex gap-1 text-sm ${item.isUp ? "text-green-500" : "text-red-500"}`}>
                                        {item.isUp ? <MoveUpRight /> : <MoveDownRight />}{item.rate}%</span>
                                </div>

                                <span className={`border-[0.01px] border-[#00C2FF] text-xs px-3 py-1 rounded-full ${item.isUp ? "text-green-500" : "text-red-500"}`}>{item.type}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0B111D] w-full h-105">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
                    <div className="overflow-y-scroll">
                        <h3 className="flex gap-1 text-xl items-center"><span className="text-[#00C2FF]"><TrendingUp /></span> Top Projects</h3>
                        <div className="border rounded-xl mt-5 overflow-hidden">
                            <Table className="overflow-x-auto">
                                <TableCaption>A list of all projects</TableCaption>
                                <TableHeader className="overflow-auto">
                                    <TableRow>
                                        <TableHead className=" text-center w-6">ID</TableHead>
                                        <TableHead className="border text-center min-w-10 max-w-125">Image</TableHead>
                                        <TableHead className="border text-center min-w-20 max-w-125 whitespace-normal wrap-break-word">Title</TableHead>
                                        <TableHead className=" text-center min-w-30 max-w-125 whitespace-normal wrap-break-word">Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        projects && projects.length === 0
                                            ? <TableRow><TableCell colSpan={5} className="border text-center font-bold text-xl text-red-500">no projects found</TableCell></TableRow>
                                            : projects.map((project) => (
                                                <TableRow key={project.id}>
                                                    <TableCell className="border text-center">{project.id}</TableCell>
                                                    <TableCell className="border text-center">
                                                        <Image src={project.imageUrl} alt={project.title} width={70} height={70} className="object-center mx-auto" />
                                                    </TableCell>
                                                    <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                        {project.title}
                                                    </TableCell>
                                                    <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                        {project.desc}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell className="text-end">({projects.length}) project/s</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <h3 className="flex gap-1 text-xl items-center"><span className="text-[#00C2FF]"><TableCellsMerge /></span> Team</h3>
                        <div className="border rounded-xl mt-5 overflow-hidden">
                            <div className="max-w-full">
                                <Table className="overflow-auto w-full">
                                    <TableCaption>A list of all projects</TableCaption>
                                    <TableHeader className="overflow-auto">
                                        <TableRow>
                                            <TableHead className="border text-center w-6">ID</TableHead>
                                            <TableHead className="border text-center min-w-10 max-w-125">Image</TableHead>
                                            <TableHead className="border text-center min-w-40 max-w-125 whitespace-normal wrap-break-word">Title</TableHead>
                                            <TableHead className="border text-center min-w-10 max-w-125 whitespace-normal wrap-break-word">Position</TableHead>
                                            <TableHead className="border text-center min-w-48 max-w-125 whitespace-normal wrap-break-word">Create At</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            teamMembers && teamMembers.length === 0
                                                ? <TableRow><TableCell colSpan={3} className="text-center font-bold text-xl text-red-500">no team members found</TableCell></TableRow>
                                                : teamMembers.map((member) => (
                                                    <TableRow key={member.id}>
                                                        <TableCell className="border text-center font-medium">{member.id}</TableCell>
                                                        <TableCell className="border text-center font-medium ">
                                                            <Image src={member.src} alt={member.name} width={50} height={50} className="object-cover mx-auto rounded-full" />
                                                        </TableCell>
                                                        <TableCell className="border text-center min-w-10 max-w-20 whitespace-normal wrap-break-word">
                                                            {member.name}
                                                        </TableCell>
                                                        <TableCell className="border text-center font-medium min-w-10 max-w-20 whitespace-normal wrap-break-word">
                                                            {member.position}
                                                        </TableCell>
                                                        <TableCell className="border text-center font-medium min-w-10 max-w-20 whitespace-normal wrap-break-word">
                                                            <span className="bg-pink-400 rounded-2xl py-1 px-2">
                                                                {member.createdAt.toLocaleString()}
                                                            </span>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={3}>Total</TableCell>
                                            <TableCell className="text-end">({teamMembers.length}) Member/s</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0B111D] w-full h-105">
                <h3 className="flex gap-1 text-xl items-center"><span className="text-[#00C2FF]"><UserIcon /></span> Users</h3>
                <div className="border rounded-xl mt-5 overflow-hidden">
                    <Table className="overflow-x-auto ">
                        <TableCaption>A list of all users</TableCaption>
                        <TableHeader className="overflow-auto">
                            <TableRow>
                                <TableHead className="border font-bold text-lg text-center w-25">ID</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-37.5 max-w-125">User Name</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Email</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Date</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                users && users.length === 0
                                    ? <TableRow><TableCell colSpan={3} className="text-center font-bold text-xl text-red-500">no users found</TableCell></TableRow>
                                    : users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell className="border text-center font-medium">{user.id}</TableCell>
                                            <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {user.username}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {user.email}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {user.createdAt.toLocaleString()}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                <span className={`${user.isAdmin ? "bg-[#358BAD]" : "bg-pink-500"} px-3 py-1 w-2 h-2 rounded-full inline-block}`}>
                                                    {user.isAdmin ? "Admin" : "User"}
                                                </span>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={4}>Total</TableCell>
                                <TableCell className="text-end">({users.length}) user/s</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AdminContent