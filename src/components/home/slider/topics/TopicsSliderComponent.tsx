import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ITopicsSliderComponentProps {
  Icon: LucideIcon,
  title: string;
  desc: string;
  url: string;
  alt: string;
}

export const TopicsSliderComponent = ({ Icon, title, desc, url, alt }: ITopicsSliderComponentProps) => {
  return (
    <div className="bg-black! relative parent-line-animate overflow-hidden p-5 rounded-md flex flex-col gap-5 border-b-[0.01px] border-r-[0.01px] border-[#dd429291] overflow-x-hidden">
      <span className="line-animate"></span>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <Icon className="w-12 h-12 rounded-md border flex justify-center items-center text-xl p-2" />
      </div>

      <p className=" text-sm text-white/70">{desc}</p>

      <div className="relative w-50 h-50 mx-auto">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover "
        />
      </div>
    </div>
  )
} 