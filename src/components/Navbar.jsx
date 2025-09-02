import logo from "../assets/logo.svg";
import { HashLink } from "react-router-hash-link";

import { useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const NavList = [
  {
    name: "Development & Integration",
    link: "#development-integration",
  },
  {
    name: "UI & UX Design",
    link: "#ui-ux-design",
  },
  {
    name: "Connect",
    link: "#connect",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  console.log(location.hash);

  return (
    <div className="site-header">
      <div className="logo">
        <a href={import.meta.env.BASE_URL}>
          <img src={logo} alt="logo" width="171px" height="20px" />
        </a>
      </div>
      <nav className={isOpen ? "active" : ""}>
        <div>
          {NavList.map((item) => {
            return (
              <HashLink
                to={item.link}
                key={item.name}
                className={location.hash === item.link ? "active" : ""}
              >
                {item.name}
              </HashLink>
            );
          })}
        </div>
      </nav>

      <div
        className="menu-bar"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IoMdMenu style={{ height: 30, width: 36 }} />
      </div>
    </div>
  );
}
