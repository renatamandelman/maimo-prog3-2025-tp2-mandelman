import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full  text-white shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Image
          className="logo"
          src="/assets/img/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
        <div></div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full pl-4 pr-10 py-2 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-search fa-w-16 fa-7x"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              class=""
            ></path>
          </svg>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
