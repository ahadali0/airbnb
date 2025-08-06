import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const headerNavData: any = [
  {
    title: "AnyWhere",
    path: "/",
  },
  {
    title: "Anytime",
    path: "/",
  },
  {
    title: "Add guests",
    path: "/",
  },
];
function HeaderWhenScrollDown() {
  return (
    <div className=" border flex items-center rounded-full w-max px-2 py-1  shadow-md bg-white ">
      <video loop autoPlay width={"60px"}>
        <source
          src={
            "https://a0.muscache.com/videos/search-bar-icons/webm/house-selected.webm"
          }
        />
      </video>
      <div className="flex gap-5 px-4">
        {headerNavData.map(({ title, path }: any) => (
          <Link to={path} className="border-l">
            {title}
          </Link>
        ))}
      </div>
      <button className="p-2 rounded-full text-white bg-rose-500 hover:bg-rose-600 ">
        <Search className="h-4 w-4" />
      </button>
    </div>
  );
}

export default HeaderWhenScrollDown;
