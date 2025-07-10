import Box from "@mui/material/Box";
import Map from "../../layout/Map";
import Bangkok from "../../assets/Bangkok.jpg";
import {
  Alert,
  CircularProgress,
  FormControl,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { useNearByAirports } from "../../store/server/flight/query";
import { useSearchAirPorts } from "../../store/server/flight/query";
import { HiOutlineLocationMarker } from "react-icons/hi";
import DatePickers from "../../components/DatePicker";

const Explore = () => {
  const { data, isLoading, isError } = useNearByAirports();
  const { data: searchData } = useSearchAirPorts();
  const [open, setOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    inseat: 0,
  });

  console.log("data", data);
  console.log("SearchData", searchData);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (isError || !data) {
    return (
      <Alert
        severity="error"
        sx={{
          mt: 4,
        }}
      >
        Failed to load airports data
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: {
              lg: "30%",
              md: "100%",
              sm: "100%",
            },
          }}
        >
          <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
            <FormControl
              fullWidth
              sx={{
                marginRight: "10px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#70757a",
              }}
            >
              <Select
                defaultValue={10}
                variant="standard"
                startAdornment={
                  <InputAdornment position="start">
                    <LuArrowLeftRight size={16} />
                  </InputAdornment>
                }
                sx={{
                  width: "100%",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#70757a",
                  p: "5px",
                  "&:hover": {
                    backgroundColor: "#E8F0FE",
                  },
                }}
              >
                <MenuItem
                  value={10}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  Round trip
                </MenuItem>
                <MenuItem
                  value={20}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  One-way
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                marginRight: "10px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#70757a",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Select
                value={0}
                variant="standard"
                startAdornment={
                  <InputAdornment position="start">
                    <IoPersonOutline size={16} />
                  </InputAdornment>
                }
                sx={{
                  width: "100%",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#70757a",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  p: "5px",
                  "&:hover": {
                    backgroundColor: "#E8F0FE",
                  },
                }}
              >
                <MenuItem
                  value=""
                  sx={{
                    display: "block",
                    p: 0,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      minWidth: 230,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          Adults
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          justifyContent: "center",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(60,64,67,0.38)",
                            color: "#70757a",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            color: "#70757a",
                          }}
                        >
                          {passengers.adults}
                        </Typography>
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "#E8F0FE",
                            color: "#1967d2",
                          }}
                        >
                          +
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          Children
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          Aged 2-11
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          justifyContent: "center",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(60,64,67,0.38)",
                            color: "#70757a",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            color: "#70757a",
                          }}
                        >
                          {passengers.children}
                        </Typography>
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "#E8F0FE",
                            color: "#1967d2",
                          }}
                        >
                          +
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          Infants
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          In seat
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          justifyContent: "center",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(60,64,67,0.38)",
                            color: "#70757a",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            color: "#70757a",
                          }}
                        >
                          {passengers.infants}
                        </Typography>
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "#E8F0FE",
                            color: "#1967d2",
                          }}
                        >
                          +
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          Infants
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                          }}
                        >
                          On lap
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          justifyContent: "center",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(60,64,67,0.38)",
                            color: "#70757a",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            color: "#70757a",
                          }}
                        >
                          {passengers.inseat}
                        </Typography>
                        <Typography
                          sx={{
                            borderRadius: "10px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                            backgroundColor: "#E8F0FE",
                            color: "#1967d2",
                          }}
                        >
                          +
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <button
                        style={{
                          outline: "none",
                          border: "none",
                          backgroundColor: "transparent",
                          color: "#1a73e8",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        style={{
                          outline: "none",
                          border: "none",
                          backgroundColor: "transparent",
                          color: "#1a73e8",
                        }}
                      >
                        Done
                      </button>
                    </Box>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                marginRight: "10px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#70757a",
              }}
            >
              <Select
                defaultValue={10}
                variant="standard"
                sx={{
                  width: "100%",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#70757a",
                  outline: "none",
                  p: "5px",
                  "&:hover": {
                    backgroundColor: "#E8F0FE",
                  },
                }}
              >
                <MenuItem
                  value={10}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  Economy
                </MenuItem>
                <MenuItem
                  value={20}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  Premium economy
                </MenuItem>
                <MenuItem
                  value={30}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  Business
                </MenuItem>
                <MenuItem
                  value={40}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#70757a",
                  }}
                >
                  First
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 1,
            }}
          >
            <FormControl sx={{ width: "24ch" }} variant="outlined">
              <OutlinedInput
                placeholder="From..."
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <HiOutlineLocationMarker />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>

            <FormControl sx={{ width: "24ch" }} variant="outlined">
              <OutlinedInput
                placeholder="From To..."
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <HiOutlineLocationMarker />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              mt: 1,
              mb: 1,
              width: "100%",
            }}
          >
            <DatePickers />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", mx: "auto" }}>
              <List>
                {data.nearby.map((airport) => (
                  <ListItem
                    key={airport.navigation.entityId}
                    alignItems="flex-start"
                    sx={{
                      border: "1px solid #ddd",
                      gap: 2,
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <img
                      src={Bangkok}
                      alt=""
                      style={{
                        width: "150px",
                        height: "120px",
                        borderRadius: "10px",
                      }}
                    />
                    <ListItemText
                      primary={
                        <Typography variant="h6" component="div">
                          {airport.presentation.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Code:{" "}
                            {airport.navigation.relevantFlightParams.skyId}
                          </Typography>
                          <br />
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Location: {airport.presentation.subtitle}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              lg: "100%",
              md: "40%",
            },
            height: "100vh",
          }}
        >
          <Map />
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;

