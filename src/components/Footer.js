import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-6 border-t mt-5 pt-4 bg-white  text-center">
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
        {" "}
        <p className="text-gray-500 py-3 text-xs">Derechos &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
