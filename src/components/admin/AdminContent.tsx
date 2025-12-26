import { AlignEndHorizontal, BadgeDollarSign, Bitcoin, MoveDownRight, MoveUpRight, Tally4, TrendingUp } from "lucide-react"
import { ChartLeft, ChartRight } from "./Charts"

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
const AdminContent = () => {
    return (
        <div className="p-5 flex flex-col gap-10">
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
        </div>
    )
}

export default AdminContent