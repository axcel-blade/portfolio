import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="flex justify-center position: relative top-0 left-0 right-0 z-10 backdrop-blur-sm">
                {/* This is hover underline
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                */}
                <Link href="./"  className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Home
                </Link>
                <Link href="./about" className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    About
                </Link>
                <Link href={"./experience"} className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Experience
                </Link>
                <Link href={"./projects"} className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Projects
                </Link>
                <Link href={"./contact"}  className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Contact
                </Link>
            </div>
        </header>
    )
}