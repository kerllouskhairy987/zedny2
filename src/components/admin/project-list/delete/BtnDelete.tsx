"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import Spinner from "@/components/ui/Spinner";
import { DeleteCourseAction } from "@/server/admin/project-list/delete/action";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

type IProps = {
    id: number;
}

const BtnDelete = ({ id }: IProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await DeleteCourseAction(id);
            toast.success("Project deleted successfully");
        } catch (error) {
            console.log(error)
            setIsDeleting(false);
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {
                    isDeleting
                        ? <Spinner />
                        : <Trash className="w-11 h-11 p-2 bg-red-500 text-black cursor-pointer rounded-md" />
                }
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className={"bg-red-500 hover:bg-red-600 text-black font-semibold"}
                        onClick={handleDelete}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default BtnDelete