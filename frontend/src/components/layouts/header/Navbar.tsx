import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "../../LayoutWrapper";
import Logo from "../../Logo";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import HeaderSearchBar from "./component/HeaderSearchBar";
import HeaderWhenScrollDown from "./component/HeaderWhenScrollDown";
import { Search } from "@mui/icons-material";

interface RouteData {
  path: string;
  name: string;
  iconLink: string;
  new: boolean;
}

const navLinkData: RouteData[] = [
  {
    path: "/",
    name: "Home",
    iconLink:
      "https://a0.muscache.com/videos/search-bar-icons/webm/house-selected.webm",
    new: false,
  },
  {
    path: "/experiences",
    name: "Experiences",
    iconLink:
      "https://a0.muscache.com/videos/search-bar-icons/webm/balloon-selected.webm",
    new: true,
  },
  {
    path: "/services",
    name: "Services",
    iconLink:
      "https://a0.muscache.com/videos/search-bar-icons/webm/consierge-selected.webm",
    new: true,
  },
];

function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [ShowScrollHeader, setshowScrollHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setshowScrollHeader(true);
      } else {
        setshowScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 sticky top-0 z-50 transition-all duration-300 w-full ">
      <LayoutWrapper>
        <div
          className={`lg:flex md:flex justify-between  hidden   ${
            !ShowScrollHeader ? "items-start" : "items-center"
          } `}
        >
          <Logo />
          <div className=" transition-all duration-500 ease-in-out px-5">
            {!ShowScrollHeader ? (
              <div className="flex flex-col gap-3 items-center w-full">
                <div className="flex  gap-3 items-center">
                  {navLinkData.map((link, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`relative cursor-pointer flex flex-row items-center 
            border-b-2 ${
              selectedIndex === index ? "border-black" : "border-transparent"
            }`}
                    >
                      <video loop autoPlay width={"70px"}>
                        <source src={link.iconLink} />
                      </video>

                      <Link to={link.path} className="font-bold">
                        {link.name}
                      </Link>

                      {link.new && (
                        <span className="absolute -top-1 right-16 inline-block transform-none">
                          <span className="px-2 py-0.5 text-xs font-semibold uppercase text-white bg-red-500 rounded-full relative">
                            NEW
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full animate-ping"></span>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-10 w-full max-w-4xl mx-auto ">
                  <HeaderSearchBar />
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto duration-500">
                <HeaderWhenScrollDown />
              </div>
            )}
          </div>

          {/* {!ShowScrollHeader ?  : <HeaderWhenScrollDown />} */}

          <div className="flex gap-2 ">
            <button className="hover:bg-gray-200 hidden lg:block font-bold py-2 px-4 duration-150 text-gray-800 rounded-full">
              Become a host
            </button>

            <span className="p-2 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300">
              <LanguageIcon />
            </span>
            <span className="p-2 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300">
              <PopupState variant="popper" popupId="demo-popup-menu">
                {(popupState: any) => (
                  <>
                    <button {...bindTrigger(popupState)}>
                      <MenuIcon />
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={() => navigate("/login")}>
                        Login
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/register")}>
                        Register
                      </MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </Menu>
                  </>
                )}
              </PopupState>
            </span>
          </div>
        </div>
        <div>
          <div className="bg-white text-center lg:hidden md:hidden block ">
            <p>Search</p>
            <span className="text-white">
              <Search />
            </span>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}

export default Navbar;
