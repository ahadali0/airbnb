import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function HeaderSearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto  ">
      <div className="flex items-center justify-between bg-white rounded-full shadow-lg border border-gray-200 ">
        <div className="hover:bg-gray-200 cursor-pointer py-2 duration-150 px-8 rounded-full">
          <TextField
            type="text"
            label="Where"
            variant="standard"
            defaultValue={"Search destinations"}
            InputProps={{ disableUnderline: true }}
          />
        </div>

        <div className="hover:bg-gray-200 cursor-pointer py-2 duration-150 px-8 rounded-full">
          <TextField
            type="text"
            variant="standard"
            defaultValue={"Add Dates"}
            label="Check In"
            InputProps={{ disableUnderline: true }}
          />
        </div>

        <div className="hover:bg-gray-200 cursor-pointer py-2 duration-150 px-8 rounded-full">
          <TextField
            type="text"
            variant="standard"
            label="Check Out"
            defaultValue={"Add Dates"}
            InputProps={{ disableUnderline: true }}
          />
        </div>

        <div className="flex justify-between items-center hover:bg-gray-200 cursor-pointer py-2 duration-150 pl-8 pr-3  rounded-full">
          <TextField
            type="text"
            variant="standard"
            label="Who"
            defaultValue={"Add Guests"}
            InputProps={{ disableUnderline: true }}
          />
          <button className="p-2 rounded-full text-white bg-rose-500 hover:bg-rose-600 ">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
