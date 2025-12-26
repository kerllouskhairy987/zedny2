

interface IProps {
    children: React.ReactNode;
    title: string;
    desc: string;
}
const BenefitsSliderComponent = ({ title, desc, children }: IProps) => {
    return (
        <div className="bg-black! relative parent-line-animate overflow-hidden p-5 rounded-md flex flex-col gap-5 border-b-[0.01px] border-r-[0.01px] border-[#dd429291]">
            <span className="line-animate"></span>
            {children}
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-lg text-white/60">{desc}</p>
        </div>
    )
}

export default BenefitsSliderComponent