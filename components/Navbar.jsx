import Router, { useRouter } from "next/router";
import requests from "../utils/requests";

function Navbar() {
    return (
        <nav className="relative">
            <div className="flex pb-2 px-10 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide space-x-10 sm:space-x-20 overflow-x-scroll">
                {Object.entries(requests).map(([key, {title, url}]) => 
                    <h2 
                        key={key} 
                        onClick={() => Router.push(`/?genre=${key}`)}
                        className="cursor-pointer last:pr-24 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400">{title}</h2>
                )}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Navbar;