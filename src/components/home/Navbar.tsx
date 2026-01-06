import { getToken } from "@/lib/getToken";
import NavbarClient from "./NavbarClient"
import { verifyToken } from "@/lib/verifyToken";

const Navbar = async () => {
    const token = await getToken();
    const dataUser = verifyToken(token);

    return <NavbarClient dataUser={dataUser} />
}

export default Navbar