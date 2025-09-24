import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import cvFile from "../../assets/Ihtisham.pdf"; // make sure file name matches exactly

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {/* CV Link first */}
          <li className="text-base font-semibold text-designColor tracking-wide cursor-pointer hover:text-white duration-300">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download="Ihtisham_Ullah_CV.pdf"
              className="px-4 py-2 border border-designColor rounded-lg hover:bg-designColor hover:text-bodyColor transition-all"
            >
              View CV
            </a>
          </li>

          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Mobile Logo & Description */}
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I am Ihtisham Ullah, an enthusiastic MERN stack developer
                  who loves to code. I am always looking for new challenges and
                  eager to learn new things. I am passionate about using my
                  skills to create innovative and user-friendly applications.
                </p>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-4">
                {/* CV Link first */}
                <li className="text-base font-semibold text-designColor tracking-wide cursor-pointer hover:text-white duration-300">
                  <a
                    href={cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Ihtisham_Ullah_CV.pdf"
                    onClick={() => setShowMenu(false)}
                    className="px-4 py-2 border border-designColor rounded-lg hover:bg-designColor hover:text-bodyColor transition-all"
                  >
                    CV
                  </a>
                </li>

                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;