import Link from "next/link";
import { useRouter } from "next/router"
import requests from "../utils/requests"

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll overflow-y-hidden scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url, id }]) => (
                    <Link key={key} href={`/?genre=${key}`}>
                        <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                    </Link>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-2/12" />
        </nav>
    )
}
export default Navbar