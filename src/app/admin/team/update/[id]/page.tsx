import UpdateTeamMemberForm from "@/components/admin/team/update/UpdateTeamMemberForm"
import { GetSingleTeamMember } from "@/server/admin/team/get/action"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const member = await GetSingleTeamMember(Number(id))

    return <UpdateTeamMemberForm member={member} />
}

export default page