import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex md:flex-row justify-between items-center p-6 border-t mt-5 pt-4 border-gray-800 text-center ml-0 md:ml-20 ">
      <div>
        <Image
          className="logo"
          src="/assets/img/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <div>
        <p className=" text-gray-700">Renata Mandelman</p>
      </div>
      <div>
        <p className="text-gray-500 py-3 text-xs">Derechos &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
