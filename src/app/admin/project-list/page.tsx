import ProjectList from "@/components/admin/project-list"
import { GetAllProjects } from "@/server/admin/project-list/get/action"

const page = async () => {
    const projects = await GetAllProjects()
    return (
        <div className="p-5 ps-10">
            <ProjectList projects={projects} />
        </div>
    )
}

export default page