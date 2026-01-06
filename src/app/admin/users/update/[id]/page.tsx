import UpdateUserForm from "@/components/admin/users/update/UpdateUserForm"
import { GetUserById } from "@/server/admin/users/get/action"

const UpdateUserAccount = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const dataUser = await GetUserById(Number(id))

    return <UpdateUserForm dataUser={dataUser!} />
}

export default UpdateUserAccount