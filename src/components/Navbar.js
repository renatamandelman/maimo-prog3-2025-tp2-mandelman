import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col items-center h-screen w-20 px-2 py-4 bg-gray-900 text-white fixed left-0 top-0 z-10 shadow-xs shadow-gray-600">
        <div>
          <Image
            className="logo"
            src="/assets/img/logo.png"
            alt="logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center gap-6 text-[12px] ">
            <li>
              <Link
                className="flex flex-col items-center gap-1 hover:text-blue-400 transition-colors duration-200"
                href="/"
              >
            
                <svg
                
                  aria-hidden="true"
                  data-prefix="fal"
                  data-icon="home"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M509.8 227.5L448 177.8v-76c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v50.1L276.1 39.1c-11.7-9.5-28.5-9.5-40.2 0L2.2 227.5c-2.6 2.1-3 5.9-.9 8.4l12.6 15.6c2.1 2.6 5.9 3 8.5.9L64 218.9v229c0 17.7 14.3 32 32 32h116c6.6 0 12-5.4 12-12V335.8l64 .3v132.2c0 6.6 5.4 12 12 12l116-.3c17.7 0 32-14.3 32-32V219l41.6 33.5c2.6 2.1 6.4 1.7 8.5-.9l12.6-15.6c2.1-2.6 1.6-6.4-.9-8.5zM416 448l-96 .3V316c0-6.6-5.4-12-12-12l-104-.3c-6.6 0-12 5.4-12 12V448H96V193.1l156.2-126c2.2-1.8 5.3-1.8 7.5 0l156.2 126V448z"
                    class=""
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-center items-center flex-col gap-1 hover:text-blue-400 transition-colors duration-200 lid "
                href="/"
              >
                <svg  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    fill="currentColor"
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
                  />
                </svg>
                Trending
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-center items-center flex-col hover:text-blue-400 transition-colors duration-200"
                href="/"
              >
                Series
              </Link>
            </li>
            <li>
    
              <Link
                className="flex justify-center items-center flex-col gap-1 hover:text-blue-400 transition-colors duration-200"
                href="/"
              >
                <svg className="w-6 h-6"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
