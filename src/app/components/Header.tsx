export default function Header() {
    return (
        <header>
            <div 
            className="flex justify-center"
            >
                {/* This is hover underline}
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                */}
                <a
                className="px-8 py-8 text-white hover:text-grey-500"
                >
                    Home
                </a>
                <a 
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    About
                </a>
                <a 
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Experience
                </a>
                <a 
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Projects
                </a>
                <a 
                className="px-8 py-8 relative inline-block text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Contact
                </a>
            </div>
        </header>
    )
}