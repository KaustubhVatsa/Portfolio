import { FaLinkedin  , FaGithub ,FaInstagram , } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import logo from "../assets/My_Logo_1.png";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Profile Logo" className="mx-2 w-10"/>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a href="https://github.com/KaustubhVatsa" target="_blank"><FaGithub className="transition-transform duration-300 ease-in-out hover:text-gray-500 hover:scale-110" /></a>
        <a href="https://www.instagram.com/kaustubhvatsa/" target="_blank"><FaInstagram className="transition-transform duration-300 ease-in-out hover:text-pink-500 hover:scale-110" /></a>
        <a href="https://www.linkedin.com/in/kaustubhvatsa26/" target="_blank"><FaLinkedin className="transition-transform duration-300 ease-in-out hover:text-blue-500 hover:scale-110" /></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaustubh26vatsa@gmail.com" target="_blank"><BiLogoGmail className="transition-transform duration-300 ease-in-out hover:text-red-600 hover:scale-110" /></a>
        </div>

    </nav>
  )
}

export default Navbar