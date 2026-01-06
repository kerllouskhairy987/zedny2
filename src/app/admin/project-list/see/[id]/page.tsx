import BackBtn from '@/components/ui/BackBtn';
import { GetSingleProject } from '@/server/admin/project-list/get/action'
import Image from 'next/image';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const singleProject = await GetSingleProject(Number(id))
  return (
    <>
      <div className='flex justify-start'>
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

        <div className="relative w-full h-80 overflow-hidden rounded-[71%_29%_80%_20%/21%_84%_16%_79%] group-hover:rounded-md duration-300 bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30">
          <Image
            src={singleProject.imageUrl}
            alt={singleProject.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold mt-5">{singleProject.title}</h3>
        <p className="text-white/60 text-sm">{singleProject.desc}</p>
      </div>
    </>
  )
}

export default page