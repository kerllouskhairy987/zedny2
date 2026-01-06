"use client";

import { UpdateUserAction, UpdateUserState } from "@/server/auth/action";
import { JWTPayload } from "@/types"
import { useActionState, useEffect, useTransition } from "react";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

interface IProps {
  dataUser: JWTPayload | null;
  canUpdate: boolean;
  setCanUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileForm = ({ dataUser, canUpdate, setCanUpdate }: IProps) => {
  const [pending, startTransition] = useTransition();

  const initialState: UpdateUserState = {
    message: "",
    error: {},
    status: 0,
    formData: new FormData(),
  }
  const [state, action, isPending] = useActionState(UpdateUserAction, initialState);

  useEffect(() => {
    if (state.status === 200 && state.message && !isPending) {
      toast.success(state.message);
      startTransition(() => {
        setCanUpdate(false);
      })
    }
    if ((state.status === 400 || state.status === 500 || state.status === 404 || state.status === 409 || state.status === 401) && state.message && !isPending) {
      toast.error(state.message)
    }
  }, [state.status, state.message, isPending, setCanUpdate])

  return (
    <div className='container my-10'>
      <form action={action} >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="w-full flex flex-col">
            <label htmlFor="username" className="font-bold text-lg">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              defaultValue={dataUser?.username}
              readOnly={!canUpdate}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
            />
            {
              state.error && state.error.username &&
              <span className="text-sm text-red-500">{state.error.username}</span>
            }
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="email" className="font-bold text-lg">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              readOnly
              defaultValue={dataUser?.email}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
            />
            {
              state.error && state.error.email &&
              <span className="text-sm text-red-500">{state.error.email}</span>
            }
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="gender" className="font-bold text-lg">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder="Enter your gender"
              readOnly={!canUpdate}
              defaultValue={dataUser?.isAdmin ? "Admin" : "User"}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="country" className="font-bold text-lg">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              readOnly={!canUpdate}
              placeholder="Enter your country"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="language" className="font-bold text-lg">Language</label>
            <input
              type="text"
              name="language"
              id="language"
              readOnly={!canUpdate}
              placeholder="Enter your language"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#dd4292]"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <button type="submit" disabled={!canUpdate} className="py-2 px-3 rounded-md mx-auto cursor-pointer bg-[#47BFEB] w-100">{isPending ? <Spinner /> : "Update Now"}</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm