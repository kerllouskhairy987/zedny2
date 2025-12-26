import ProjectList from "@/components/admin/project-list"
import { GetAllProjects } from "@/server/admin/project-list/get/action"

const page = async () => {
    const projects = await GetAllProjects()
    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    )
}

export default page