import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "../../LayoutWrapper";
import Logo from "../../Logo";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState, type ReactElement } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import HeaderSearchBar from "./component/HeaderSearchBar";
import HeaderWhenScrollDown from "./component/HeaderWhenScrollDown";
import { Favorite, Person, Search } from "@mui/icons-material";

interface RouteData {
  path: string;
  name: string;
  iconLink: string;
  new: boolean;
}

interface BottomTabBar {
  path: string;
  name: string;
  icon: ReactElement;
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

const bottomBarTab: BottomTabBar[] = [
  {
    path: "/explore",
    name: "Explore",
    icon: <Search fontSize="medium" />,
  },
  {
    path: "/whishlists",
    name: "Wishlists",
    icon: <Favorite fontSize="medium" />,
  },
  {
    path: "/login",
    name: "Log In",
    icon: <Person fontSize="medium" />,
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
          className={`lg:flex md:flex justify-between   hidden   ${
            !ShowScrollHeader ? "items-start" : "items-center"
          } `}
        >
          <Logo />
          <div className="transition-all duration-500 ease-in-out ">
            {!ShowScrollHeader ? (
              <div className="flex flex-col gap-3 items-center">
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

          <div className="flex   gap-2 ">
            <button className="hover:bg-gray-200 hidden lg:block w-36 font-bold py-2 px-4 duration-150 text-gray-800 rounded-full">
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
        <div className="w-full px-4 lg:hidden md:hidden block">
          <div className="bg-white text-center lg:hidden md:hidden flex items-center justify-center gap-3 py-3 rounded-full">
            <span>
              <Search />
            </span>
            <p className="text-base font-semibold">Start your search</p>
          </div>

          <div className="mt-5  top-5">
            <div className="flex flex-wrap justify-between sm:justify-evenly items-center gap-4 sm:gap-6 md:px-10 lg:px-20 ">
              {navLinkData.map((link, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative cursor-pointer flex flex-col items-center text-center border-b-2 ${
                    selectedIndex === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <video
                    loop
                    autoPlay
                    muted
                    width="50"
                    className="w-[50px] h-[50px] object-contain"
                  >
                    <source src={link.iconLink} />
                  </video>

                  <Link
                    to={link.path}
                    className="font-semibold text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>

                  {link.new && (
                    <span className="absolute top-0 right-0">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase text-white bg-red-500 rounded-full relative">
                        NEW
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full animate-ping"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>

      {/* bottom sticky card */}
      <div className="bg-gray-200 py-3 lg:hidden md:hidden block  fixed bottom-0 left-0 w-full z-50 shadow-inner">
        <div className="flex justify-evenly  gap-3 items-center">
          {bottomBarTab.map((link, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative  cursor-pointer flex flex-col justify-evenly items-center 
            border-b-2 ${
              selectedIndex === index ? "border-black" : "border-transparent"
            }`}
            >
              <span
                className={
                  selectedIndex === index ? "text-black" : "text-gray-500"
                }
              >
                {link?.icon}
              </span>

              <Link
                to={link.path}
                className={`font-semibold  ${
                  selectedIndex === index ? "text-black" : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
