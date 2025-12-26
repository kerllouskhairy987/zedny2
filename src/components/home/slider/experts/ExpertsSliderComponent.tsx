import Image from "next/image";

interface IExpertsSliderComponentProps {
  url: string
  alt: string
  name: string
}

export const ExpertsSliderComponent = ({ url, alt, name }: IExpertsSliderComponentProps) => {
  return (
    <div>
      <div className="relative w-50 h-50">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover "
        />
      </div>
      <h2 className="font-bold text-xl">{name}</h2>
    </div>
  )
} 