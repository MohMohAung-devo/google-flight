import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Apps as AppsIcon } from "@mui/icons-material";
//import Travel from "../assets/travelIcons.png";
import { MdTravelExplore } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

interface handleDrawerProps {
  handleDrawerToggle: () => void;
}

const menuList = [
  {
    name: "Travel",
    link: "/",
    icon: <MdTravelExplore />,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: <MdTravelExplore />,
  },

  {
    name: "Flights",
    link: "/flights",
    icon: <GiCommercialAirplane />,
  },

  {
    name: "Hotels",
    link: "/hotels",
    icon: <FaBed />,
  },
  {
    name: "Holiday rentals",
    link: "/holiday-rentals",
    icon: <IoHome />,
  },
];
const Header = ({ handleDrawerToggle }: handleDrawerProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (link: string, index: number) => {
    navigate(link, index);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "flex" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: 400 }}
        >
          <span style={{ color: "blue" }}>G</span>
          <span style={{ color: "red" }}>o</span>
          <span style={{ color: "yellow" }}>o</span>
          <span style={{ color: "blue" }}>g</span>
          <span style={{ color: "green" }}>l</span>
          <span style={{ color: "red" }}>e</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: { md: "none", sm: "none", xs: "none", lg: "flex" },
          alignItems: "center",
          gap: 3,
          ml: 4,
        }}
      >
        {menuList.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            color="inherit"
            onClick={() => handleNavigation(item.link, index)}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #EBECEC",
              padding: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "20px",
              color: "#2877ED",
              backgroundColor:
                location.pathname === item.link ? "#C8DAF6" : "transparent",
            }}
          >
            {item.icon}
            <Typography
              sx={{
                color: location.pathname === item.link ? "#2877ED" : "#5F6368",
                fontSize: "14px",
                fontWeight: "600",
                ".MuiLink-root:hover &": {
                  color:
                    location.pathname === item.link ? "#2877ED" : "#1976d2",
                },
              }}
            >
              {" "}
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton color="inherit">
          <AppsIcon />
        </IconButton>
        <IconButton color="inherit">M</IconButton>
      </Box>
    </Box>
  );
};

export default Header;
