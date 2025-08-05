import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
];

const travelTipsData = [
  "Family travel hub",
  "Tips and inspiration",
  "Family budget travel",
  "Vacation ideas for any budget",
  "Explore nature with the family",
  "Must-see parks for family travel",
  "Kid-friendly state parks",
  "Travel Europe on a budget",
];

const airbnbFriendlyCities = [
  { city: "Albuquerque", state: "New Mexico" },
  { city: "Austin", state: "Texas" },
  { city: "Boston", state: "Massachusetts" },
  { city: "Chicago", state: "Illinois" },
  { city: "Denver", state: "Colorado" },
  { city: "Charlotte", state: "North Carolina" },
];

export default function CategoryTabs() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-semibold">Inspiration for future getaways</h1>

      <Box className="mt-1">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="font-semibold" label="Unique Stays" {...a11yProps(0)} />
          <Tab className="font-semibold" label="Travel tips & inspiration" {...a11yProps(1)} />
          <Tab className="font-semibold" label="Airbnb-friendly apartments" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <ul className="space-y-2">
            {uniqueStaysData.map((item, index) => (
              <li key={index}>
                <strong>{item.type}</strong> in {item.country}
              </li>
            ))}
          </ul>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <ul className="list-disc pl-5 space-y-1">
            {travelTipsData.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <ul className="space-y-2">
            {airbnbFriendlyCities.map((item, index) => (
              <li key={index}>
                <strong>{item.city}</strong>, {item.state}
              </li>
            ))}
          </ul>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
