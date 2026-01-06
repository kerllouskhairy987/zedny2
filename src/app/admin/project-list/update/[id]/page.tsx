import UpdateProjectForm from "@/components/admin/project-list/update/UpdateProjectForm"
import { GetSingleProject } from "@/server/admin/project-list/get/action";

const UpdatePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const singleProject = await GetSingleProject(Number(id))
    console.log(singleProject)

    return <UpdateProjectForm singleProject={singleProject} />
}

export default UpdatePage