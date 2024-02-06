'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    const { data: session } = useSession()
    return (
        <nav className="w-full p-2">
            <div className="flex items-center justify-between w-full">
                <div>Logo</div>
                <ul className="flex flex-1 items-center justify-center gap-6">
                    <li className="text-center"><Link href={"/boards"}>Boards</Link></li> 
                    <li className="text-center"><Link href={"/bookclub"}>BookClub</Link></li>
                    <li className="text-center"><Link href={"/todolist"}>TodoList</Link></li>
                </ul>
                <div><Image alt="profile picture" src={session.user.image} height={30} width={30} /></div>
            </div>
        </nav>
    )
}