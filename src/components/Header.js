import Image from "next/image";

const Header = () => {
  return (
   
      <div className="flex items-center justify-between gap-4 m-4">
        <Image
          className="logo"
          src="/assets/img/logo.png"
          alt="logo"
          width={110}
          height={50}
        />

    <div className="flex items-center ">
  <label htmlFor="simple-search" className="sr-only">
    Search
  </label>

  <div className=" w-full">

    <input
      type="text"
      id="simple-search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Buscar película..."
      required
    />
  </div>

  <button
    type="submit"
    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
    <span className="sr-only">Buscar</span>
  </button>
</div>


      </div>

  );
};

export default Header;
