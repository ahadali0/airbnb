import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../App.css";

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Dummy Data
const uniqueStaysData = [
  { type: "Hostel", country: "United States" },
  { type: "Flat", country: "Germany" },
  { type: "Room", country: "Italy" },
  { type: "Villa", country: "Spain" },
  { type: "Villa", country: "Spain" },
  { type: "Villa", country: "Spain" },
  { type: "Villa", country: "Spain" },
  { type: "Villa", country: "Spain" },
  { type: "Villa", country: "Spain" },
];

const travelTipsData = [
  { city: "Albuquerque", state: "New Mexico" },
  { city: "Austin", state: "Texas" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Boston", state: "Massachusetts" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Chicago", state: "Illinois" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Denver", state: "Colorado" },
  { city: "Charlotte", state: "North Carolina" },
];

const airbnbFriendlyCities = [
  { city: "Albuquerque", state: "New Mexico" },
  { city: "Austin", state: "Texas" },
  { city: "Boston", state: "Massachusetts" },
  { city: "Chicago", state: "Illinois" },
  { city: "Denver", state: "Colorado" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Charlotte", state: "North Carolina" },
  { city: "Charlotte", state: "North Carolina" },
];

export default function CategoryTabs() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="mt-10 mb-16">
      <h1 className="text-2xl font-semibold">
        Inspiration for future getaways
      </h1>

      <Box className="mt-1 ">
        <Box className="overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="min-w-max border-b border-b-gray-300"
          >
            <Tab
              className="font-semibold"
              label="Unique Stays"
              {...a11yProps(0)}
            />
            <Tab
              className="font-semibold"
              label="Travel tips & inspiration"
              {...a11yProps(1)}
            />
            <Tab
              className="font-semibold"
              label="Airbnb-friendly apartments"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <ul className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6">
            {uniqueStaysData.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <strong>{item.type}</strong>
                <p>{item.country}</p>
              </div>
            ))}
          </ul>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <ul className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-6">
            {travelTipsData.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <strong>{item.city}</strong>
                <p>{item.state}</p>
              </div>
            ))}
          </ul>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <ul className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2   gap-6">
            {airbnbFriendlyCities.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <strong>{item.city}</strong>
                <p>{item.state}</p>
              </div>
            ))}
          </ul>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
