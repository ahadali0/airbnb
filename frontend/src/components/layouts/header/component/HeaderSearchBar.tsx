import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function HeaderSearchBar() {
  return (
    <div className="w-full">
      <div
        className="
          flex flex-wrap md:flex-nowrap 
          items-center justify-between 
          w-full bg-white rounded-full 
          shadow-lg border border-gray-200 overflow-hidden
        "
      >
        <div className="flex-1 min-w-[130px] rounded-full hover:bg-gray-100 cursor-pointer duration-150 px-3 sm:px-4 py-2">
          <div className="mt-2">
            <TextField
              type="text"
              label="Where"
              variant="standard"
              defaultValue="Search destinations"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                  padding: "4px 0",
                },
                "& label": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                },
              }}
            />
          </div>
        </div>

        <div className="flex-1 min-w-[110px] rounded-full hover:bg-gray-100 cursor-pointer duration-150 px-3 sm:px-4 py-2">
          <div className="mt-2">
            <TextField
              type="text"
              variant="standard"
              defaultValue="Add Dates"
              label="Check In"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                  padding: "4px 0",
                },
                "& label": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                },
              }}
            />
          </div>
        </div>

        <div className="flex-1 min-w-[110px] rounded-full hover:bg-gray-100 cursor-pointer duration-150 px-3 sm:px-4 py-2">
          <div className="mt-2">
            <TextField
              type="text"
              variant="standard"
              defaultValue="Add Dates"
              label="Check Out"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                  padding: "4px 0",
                },
                "& label": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                },
              }}
            />
          </div>
        </div>

        <div
          className="
            flex items-center justify-between 
            flex-1 min-w-[130px] px-3 sm:px-4 py-2
            hover:bg-gray-100 rounded-full cursor-pointer duration-150
          "
        >
          <div className="mt-2">
            <TextField
              type="text"
              variant="standard"
              label="Who"
              defaultValue="Add Guests"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                  padding: "4px 0",
                },
                "& label": {
                  fontSize: { xs: 12, sm: 14, md: 15 },
                },
              }}
            />
          </div>
          <button
            className="
              flex items-center justify-center 
              p-2 sm:p-3 rounded-full text-white bg-rose-500 hover:bg-rose-600 transition
            "
          >
            <Search className="!text-white h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
