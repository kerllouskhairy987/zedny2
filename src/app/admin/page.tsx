import AdminContent from "@/components/admin/AdminContent"
import { GetAllProjects } from "@/server/admin/project-list/get/action"
import { GetAllTeamMembers } from "@/server/admin/team/get/action";
import { GetAllUsers } from "@/server/admin/users/action";

const page = async () => {
    const projects = await GetAllProjects();
    const teamMembers = await GetAllTeamMembers()
    const users = await GetAllUsers();

    return <AdminContent projects={projects} teamMembers={teamMembers} users={users} />
}

export default page