import DeleteUserAccount from "@/components/admin/users/delete/DeleteUserAccount";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GetAllUsers } from "@/server/admin/users/action"
import { Pen } from "lucide-react";
import Link from "next/link";


const page = async () => {
    const users = await GetAllUsers();

    type SinceType = "hours" | "days" | "months";

    function getDateInfo(date: Date | string) {
        const now = Date.now();
        const time = new Date(date).getTime();
        const diff = now - time;

        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        let value: string;
        let type: SinceType;

        if (hours < 24) {
            value = `${hours}h`;
            type = "hours";
        } else if (days < 30) {
            value = `${days}d`;
            type = "days";
        } else {
            value = `${months}mo`;
            type = "months";
        }

        const color =
            type === "hours"
                ? "text-green-500"
                : type === "days"
                    ? "text-yellow-400"
                    : "text-pink-500";

        return {
            formatted: new Date(date).toLocaleString(),
            value,
            type,
            color,
        };
    }


    return (
        <section className="p-5 ps-10">
            <div>
                <div>
                    <Table className="overflow-x-auto ">
                        <TableCaption>A list of all users</TableCaption>
                        <TableHeader className="overflow-auto">
                            <TableRow>
                                <TableHead className="border font-bold text-lg text-center w-25">ID</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-37.5 max-w-125">User Name</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">Email</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Date</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-30 max-w-125 whitespace-normal wrap-break-word">Status</TableHead>
                                <TableHead className="border font-bold text-lg text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">Panned User</TableHead>
                                <TableHead className="border font-bold text-lg text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                users && users.length === 0
                                    ? <TableRow><TableCell colSpan={3} className="text-center font-bold text-xl text-red-500">no users found</TableCell></TableRow>
                                    : users.map((user) => {
                                        const created = getDateInfo(user.createdAt);
                                        const updated = getDateInfo(user.updatedAt);

                                        return (
                                            <TableRow key={user.id}>
                                                <TableCell className="border text-center font-medium">{user.id}</TableCell>
                                                <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                    {user.username}
                                                </TableCell>
                                                <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                    {user.email}
                                                </TableCell>
                                                <TableCell className="border text-center font-medium min-w-90 max-w-125 whitespace-normal wrap-break-word">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex justify-between gap-3 border border-green-400 rounded-md p-2">
                                                            <span>Created At: <span className="font-bold text-sm">{created.formatted}</span></span>
                                                            <span>
                                                                <span className="">
                                                                    Ago
                                                                </span>
                                                                <span className={`${created.color} font-bold text-sm`}>
                                                                    {created.value}
                                                                </span>
                                                            </span>
                                                        </div>

                                                        <div className="flex justify-between gap-3 border border-pink-400 rounded-md p-2">
                                                            <span>Updated At: <span className="font-bold text-sm">{updated.formatted}</span></span>
                                                            <span>
                                                                <span className="">
                                                                    Ago
                                                                </span>
                                                                <span className={`${updated.color} font-bold text-sm`}>
                                                                    {updated.value}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                    <span className={`${user.isAdmin ? "bg-[#358BAD]" : "bg-pink-500"} px-3 py-1 w-2 h-2 rounded-full inline-block}`}>
                                                        {user.isAdmin ? "Admin" : "User"}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                    <span className={`${user.pan ? "bg-red-500" : "bg-green-500"} px-3 py-1 w-2 h-2 rounded-full inline-block}`}>
                                                        {user.pan ? "Panned" : "Not Panned"}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="text-center font-semibold flex justify-center gap-3">
                                                    <DeleteUserAccount id={user.id} />

                                                    <Link href={`/admin/users/update/${user.id}`}>
                                                        <Pen className="w-11 h-11 p-2 bg-green-500 text-black rounded-md cursor-pointer" />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={6}>Total</TableCell>
                                <TableCell className="text-end">({users.length}) user/s</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default page