
interface IProps {
    isLogin: boolean
}
const LoginForm = ({isLogin}: IProps) => {
    return (
        <div className={`order-2 md:order-1 flex flex-col justify-center gap-10 p-3 ${isLogin ? "opacity-100" : "opacity-0 h-64"}`}>
            <div className="flex flex-col gap-6">
                <h2 className="gradient-text-color text-start! text-3xl">Welcome Back</h2>
                <p className="text-white/60 ">Thank you for getting back.</p>
            </div>

            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">Email Address</label>
                    <input type="email" placeholder="khairy@gmail.com" name="email" id="email"
                        className="border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#dd4292]"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-xl font-semibold">Password</label>
                    <input type="password" placeholder="********" name="password" id="password"
                        className="border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-[#dd4292]"
                    />
                </div>
                <div className="pt-4">
                    <button
                        className="
                                group relative px-8 py-3 rounded-md
                                bg-linear-to-r from-[#dd4292] via-[#ae64fc] to-[#2cd4f8]
                                text-white font-bold
                                flex items-center gap-3
                                transition-all duration-300
                                hover:shadow-[0_0_25px_rgba(174,100,252,0.6)]
                                hover:scale-[1.03] cursor-pointer
                                mx-auto lg:mx-0
                            "
                    >
                        Login
                        <div
                            className=" rounded-full p-1 bg-white/20 group-hover:bg-white/4 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="black"
                            />
                        </div>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default LoginForm