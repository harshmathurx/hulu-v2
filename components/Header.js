import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
import Link from "next/link"

function Header() {
  return (
    <header className="flex flex-col md:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href='/'>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </Link>
        <Link href='/?genre=fetchTrending'>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        </Link>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain text-5xl font-semibold font-mono" src="https://links.papareact.com/ua6" width={200} height={100} alt="Hulu Logo" />
    </header>
  )
}

export default Header