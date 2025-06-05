import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
   <>
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
                <div>
                <Image className="logo" src="/assets/img/logo.png" alt="logo" width={100} height={50}/>
                </div>
                <div>
                   <ul className="flex gap-6 text-sm md:text-base"> 
                    <li><Link className="hover:text-blue-400 transition-colors duration-200" href="/">Home</Link> </li>
                   <li> <Link className="hover:text-blue-400 transition-colors duration-200" href="/">Movies</Link></li>
                    <li><Link className="hover:text-blue-400 transition-colors duration-200" href="/">Series</Link></li>
                   <li> <Link className="hover:text-blue-400 transition-colors duration-200" href="/">Trailers</Link></li>
                    </ul>
                </div>
            </nav>
        </>
  );
};

export default Navbar;
