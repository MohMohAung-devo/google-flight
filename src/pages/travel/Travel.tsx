import Box from "@mui/material/Box";
import Image from "../../assets/travel.jpg";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IoIosSearch } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Singpore from "../../assets/singpore.jpg";
import Bangkok from "../../assets/Bangkok.jpg";
import Dubai from "../../assets/Dubai.jpg";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Map from "../../layout/Map";
import Link from "@mui/material/Link";

const cityList = [
  {
    name: "Singapore",
    date: "9-16 jan 2026",
    place: "Padang,Buddha Tooth Temple & shoppind",
    price: "357280",
    image: Singpore,
  },

  {
    name: "Bangkok",
    date: "9-16 jan 2026",
    place: "Padang,Buddha Tooth Temple & shoppind",
    price: "357280",
    image: Bangkok,
  },
  {
    name: "Dubai",
    date: "9-16 jan 2026",
    place: "Padang,Buddha Tooth Temple & shoppind",
    price: "357280",
    image: Dubai,
  },
];

const footerMenu = [
  {
    name: "About",
  },
  {
    name: "Privacy",
  },
  {
    name: "Terms",
  },
  {
    name: "Join our studies",
  },
  {
    name: "Report illegal content",
  },
  {
    name: "Feedback",
  },
  {
    name: "Help Centre and Consumer Information",
  },
];

const Travel = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "90%",
          md: "90%",
          lg: "70%",
        },

        mx: "auto",
        marginTop: -5,
      }}
    >
      <Box sx={{ width: "100%", flexGrow: 1, justifyItems: "center" }}>
        <img
          src={Image}
          width="100%"
          height="400px"
          style={{ border: "none", borderRadius: "20px" }}
        />
        <p style={{ marginTop: -4, fontSize: "35px" }}>Travel</p>
        <Box sx={{ width: "100%" }}>
          <FormControl
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <OutlinedInput
              placeholder="Search for flights, hotels and more"
              startAdornment={
                <InputAdornment position="start">
                  <IoIosSearch size={20} style={{ color: "#757575" }} />
                </InputAdornment>
              }
              sx={{
                borderRadius: "30px",
                boxShadow: " 0.3em 0.3em 1em rgb(95, 99, 104)",
                width: {
                  xs: "80%",
                  sm: "60%",
                  md: "30%",
                },
                height: "45px",
                backgroundColor: "#FFFFFF",
                // "& .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "#5F6368",
                // },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5F6368",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5F6368",
                  borderWidth: "1px",
                },
              }}
            />
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: "10px",
        }}
      >
        <List
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItem
            sx={{
              width: "100px",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                color: "#5F6368",
                "&:hover": {
                  p: 1,
                  boxShadow: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <MdTravelExplore size={22} />
              <ListItemText
                primary="Travel"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    fontWeight: 400,
                  },
                }}
              >
                Travel
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              width: "100px",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                color: "#5F6368",
                "&:hover": {
                  p: 1,
                  boxShadow: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <GiCommercialAirplane size={22} />
              <ListItemText
                primary="Flights"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    fontWeight: 400,
                  },
                }}
              >
                Flights
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              width: "100px",
              gap: 1,
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                color: "#5F6368",
                "&:hover": {
                  p: 1,
                  boxShadow: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <FaBed size={22} />
              <ListItemText
                primary="Hotels"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    fontWeight: 400,
                  },
                }}
              >
                Hotels
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              width: "150px",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                color: "#5F6368",
                "&:hover": {
                  p: 1,
                  boxShadow: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <IoHome size={22} />
              <ListItemText
                primary="Holiday Rentals"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    fontWeight: 400,
                  },
                }}
              >
                Holiday Rentals
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            mb: 10,
            p: {
              lg: 6,
              md: 2,
              sm: 2,
            },
            mx: "auto",
          }}
        >
          <h2>Popular destinations</h2>
          <Typography>Based on your location in Yangon</Typography>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Grid
              size={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {cityList.map((item) => (
                <Grid
                  size={12}
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    gap: 3,
                    backgroundColor: "#fff",
                    border: "1px solid rgb(218, 220, 224)",
                    borderRadius: "20px",
                    height: "130px",

                    "&:hover": {
                      backgroundColor: "#f1f3f4",
                      boxShadow:
                        "0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)",
                    },
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "200px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                  <ListItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      justifyItems: "flex-start",
                      alignItems: "start",
                    }}
                  >
                    <ListItemText
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#202124",
                        },
                      }}
                    >
                      {item.name}
                    </ListItemText>
                    <ListItemText
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#70757a",
                          mt: -2,
                        },
                      }}
                    >
                      {item.date}
                    </ListItemText>
                    <ListItemText
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#70757a",
                          mt: -2,
                        },
                      }}
                    >
                      {item.place}
                    </ListItemText>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 6 }}>
              <Box
                sx={{
                  width: {
                    lg: "100%",
                    md: "100%",
                  },
                  height: "50vh",
                }}
              >
                <Map />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider sx={{ mx: 2, my: 2 }} />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",

            justifyContent: "space-between",
            p: 4,
            mx: "auto",
          }}
        >
          {footerMenu.map((item) => (
            <Link
              to=""
              sx={{
                textDecoration: "none",
                color: "#1a73e8",
                fontSize: "14px",
                fontWeight: "400",
                transition: "all 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#1557b0",
                  textDecoration: "underline",
                },
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#70757a",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          If you book more than one travel service for your trip or holiday
          using the links on this site, for example both hotel accommodation and
          flights, you will NOT benefit from rights applying to packages under
          Directive (EU) 2015/2302. Google will not be responsible for the
          proper performance of any travel services. In case of problems, please
          contact the relevant service provider.
        </Typography>
      </Box>
    </Box>
  );
};

export default Travel;
