import Image from "next/image"
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header() {
    return(
        <header className="flex flex-col sm:flex-row justify-between m-5 items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

function HeaderItem({title, Icon}){
    return(
        <div className="group flex-col flex items-center w-11 cursor-pointer sm:w-20 hover:text-white">
            <Icon className="h-8 mb-2 group-hover:animate-bounce"/>
            <div className="tracking-widest opacity-0 group-hover:opacity-100 text-[0.5rem] sm:text-base">{title}</div>
        </div>
    )
}

export default Header;