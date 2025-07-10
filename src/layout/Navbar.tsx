import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import { MdTravelExplore } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiStats } from "react-icons/bi";
import { TbShieldDollar } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { GrCurrency } from "react-icons/gr";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";

const navigationItems = [
  { text: "Travel", icon: <MdTravelExplore />, link: "/" },
  { text: "Explore", icon: <MdTravelExplore />, link: "/explore" },
  { text: "Flights", icon: <GiCommercialAirplane />, link: "/flights" },
  { text: "Hotels", icon: <FaBed />, link: "/hotels" },
  { text: "Holiday rentals", icon: <IoHome />, link: "/holiday-rentals" },
];

const changelanMenu = [
  {
    text: "Tracked flight prices",
    icon: <BiStats />,
    link: "/travel/flight/save",
  },
  {
    text: "Price Guaranted",
    icon: <TbShieldDollar />,
    link: "/price-guaranted",
  },
  {
    text: "Ticked flight prices",
    icon: <MdTravelExplore />,
    link: "/ticked-flight",
  },
  {
    text: "Change language",
    icon: <GrLanguage />,
    link: "/change-language",
  },
  {
    text: "Change currency",
    icon: <GrCurrency />,
    link: "/change-currency",
  },
  {
    text: "Change location",
    icon: <MdOutlineEditLocationAlt />,
    link: "/change-location",
  },
];

type langeRouteKey =
  | "/"
  | "/explore"
  | "/flights"
  | "/hotels"
  | "/holiday-rentals";

const lanShowMenu: Record<langeRouteKey, string[]> = {
  "/": [], // Travel page
  "/explore": [
    "Tracked flight prices",

    "Change language",
    "Change currency",
    "Change location",
  ], // Explore page
  "/flights": [
    "Tracked flight prices",
    "Price Guaranted",
    "Change language",
    "Change currency",
    "Change location",
  ], // Flights page
  "/hotels": ["Tracked flight prices", "Change currency"], // Hotels page
  "/holiday-rentals": ["Tracked flight prices", "Change currency"],
};

const footerMenu = [
  {
    text: "Travel settings",
    icon: <IoSettingsOutline />,
    link: "/travel/settings",
  },
  {
    text: "Flights settings",
    icon: <IoSettingsOutline />,
    link: "/travel-setting",
  },
  { text: "Feedback", icon: <RiFeedbackLine />, link: "/feedback" },
  { text: "Help", icon: <IoIosHelpCircleOutline />, link: "/help" },
];

type RouteKey = "/" | "/explore" | "/flights" | "/hotels" | "/holiday-rentals";

const footerShowMenu: Record<RouteKey, string[]> = {
  "/": ["Travel settings", "Feedback", "Help"], // Travel page
  "/explore": ["Flights settings", "Feedback", "Help"], // Explore page
  "/flights": ["Flights settings", "Feedback", "Help"], // Flights page
  "/hotels": ["Travel settings", "Feedback", "Help"], // Hotels page
  "/holiday-rentals": ["Travel settings", "Feedback", "Help"],
};

export const Navbar = () => {
  const location = useLocation();

  const getLanMenuforActiveNay = () => {
    const allowedItem = lanShowMenu[location.pathname as langeRouteKey] || [];
    return changelanMenu.filter((item) => allowedItem.includes(item.text));
  };
  const filterlanMenu = getLanMenuforActiveNay();

  const getFooterMenuforActiveNav = () => {
    const allowedItem = footerShowMenu[location.pathname as RouteKey] || [];
    return footerMenu.filter((item) => allowedItem.includes(item.text));
  };

  const filterFooterMenu = getFooterMenuforActiveNav();
  return (
    <Box sx={{ mt: 8 }}>
      <List
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          paddingRight: "10px",
        }}
      >
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            // underline="none"
            color="inherit"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "12px",
              paddingLeft: "21px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor:
                location.pathname === item.link ? "#C8DAF6" : "transparent",
            }}
          >
            <Box
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "20px",
              }}
            >
              {" "}
              {item.icon}
            </Box>

            <Typography
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "14px",
                fontWeight: "500",
                "&:hover": {
                  color:
                    location.pathname === item.link ? "#2877ED" : "#1976d2",
                },
              }}
            >
              {" "}
              {item.text}
            </Typography>
          </Link>
        ))}
      </List>
      <Divider sx={{ mx: 2, my: 2 }} />
      <List
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          paddingRight: "5px",
        }}
      >
        {filterlanMenu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            // underline="none"
            color="inherit"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "12px",
              paddingLeft: "21px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor:
                location.pathname === item.link ? "#C8DAF6" : "transparent",
            }}
          >
            <Box
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "20px",
              }}
            >
              {" "}
              {item.icon}
            </Box>

            <Typography
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "14px",
                fontWeight: "500",
                "&:hover": {
                  color:
                    location.pathname === item.link ? "#2877ED" : "#1976d2",
                },
              }}
            >
              {" "}
              {item.text}
            </Typography>
          </Link>
        ))}
      </List>
      <Divider sx={{ mx: 2, my: 2 }} />
      <List
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          paddingRight: "5px",
        }}
      >
        {filterFooterMenu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            // underline="none"
            color="inherit"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "12px",
              paddingLeft: "21px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor:
                location.pathname === item.link ? "#C8DAF6" : "transparent",
            }}
          >
            <Box
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "20px",
              }}
            >
              {" "}
              {item.icon}
            </Box>

            <Typography
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "14px",
                fontWeight: "500",
                "&:hover": {
                  color:
                    location.pathname === item.link ? "#2877ED" : "#1976d2",
                },
              }}
            >
              {" "}
              {item.text}
            </Typography>
          </Link>
        ))}
      </List>
    </Box>
  );
};
