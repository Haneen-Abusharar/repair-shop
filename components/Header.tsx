import Link from "next/link";

import { HomeIcon, File, UserRound } from "lucide-react";
import { Navbutton } from "@/components/Navbutton";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
    return (
       <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex justify-between items-center w-full h-9">
                <div className="flex items-center gap-2">
                    <Navbutton icon={HomeIcon} label="Home" href="/home" />
                    <Link className="flrx justify-center items-center gap-2 ml-0"
                     href="/home" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer repair shop
                        </h1>
                    </Link>    
                </div>
                <div className="flex items-center">
                    <Navbutton icon={File} label="Tickets" href="/tickets" />
                    <Navbutton icon={UserRound} label="Customers" href="/customers" />
                    <ModeToggle/>
                </div>    
            </div>
       </header>

    )
}