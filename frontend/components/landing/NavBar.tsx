import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import Dropdown from "./DropDown";

const NavBar = () => {
  return (
    <header className="bg-opacity-0 pt-4 sticky top-0 ">
      <nav className="px-10 flex justify-between items-center bg-opacity-0">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={logo}
            alt="logo"
            width={170}
            height={170}
          />
        </Link>
        <Dropdown />
      </nav>
    </header>
  )
}

export default NavBar;