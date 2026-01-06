import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllComplaints } from "@/server/admin/complaints/action";

const page = async () => {
    const complaints = await getAllComplaints();

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
                <Table className="overflow-x-auto ">
                    <TableCaption>A list of all users</TableCaption>
                    <TableHeader className="overflow-auto">
                        <TableRow>
                            <TableHead className="border font-bold text-lg text-center w-25">ID</TableHead>
                            <TableHead className="border font-bold text-lg text-center min-w-37.5 max-w-125">User Name</TableHead>
                            <TableHead className="border font-bold text-lg text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">Email</TableHead>
                            <TableHead className="border font-bold text-lg text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">Messages</TableHead>
                            <TableHead className="border font-bold text-lg text-center min-w-75 max-w-125 whitespace-normal wrap-break-word">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            complaints && complaints.length === 0
                                ? <TableRow><TableCell colSpan={3} className="text-center font-bold text-xl text-red-500">no panned user found</TableCell></TableRow>
                                : complaints.map((com) => {
                                    const created = getDateInfo(com.createdAt);
                                    const updated = getDateInfo(com.updatedAt);

                                    return (
                                        <TableRow key={com.id}>
                                            <TableCell className="border text-center font-medium">{com.id}</TableCell>
                                            <TableCell className="border text-center min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {com.username}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {com.email}
                                            </TableCell>
                                            <TableCell className="border text-center font-medium min-w-50 max-w-125 whitespace-normal wrap-break-word">
                                                {com.message}
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
                                        </TableRow>
                                    )
                                })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total</TableCell>
                            <TableCell className="text-end">({complaints.length}) user/s</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </section>
    )
}

export default page