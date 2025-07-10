import { Box, Button, Card, List, ListItem, ListItemText } from "@mui/material";
import Flight from "../../assets/Flight.jpg";
import DateFormat from "../../components/DateFormat";

import {
  Alert,
  CircularProgress,
  FormControl,
  InputAdornment,
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
import { IoIosSearch } from "react-icons/io";
import { useFlightSearch } from "../../store/server/flight/query";

const Flights = () => {
  const { data, isLoading, isError } = useNearByAirports();
  const { data: searchData } = useSearchAirPorts();
  const [searchParams, setSearchParams] = useState({
    originSkyId: "",
    destinationSkyId: "",
    originEntityId: "",
    destinationEntityId: "",
    cabinClass: "economy",
    adults: 1,
 
  });
  const {
    data: flights,
    isLoading: isSearching,
    isError: searchError,
    refetch: executeSearch,
  } = useFlightSearch({
    ...searchParams,
    enabled: false, 
  });
  const [open, setOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    inseat: 0,
  });

  console.log("data", data);
  console.log("SearchData", searchData);

  const { data: searchFlights } = useFlightSearch({
    originSkyId: "LOND",
    destinationSkyId: "NYCA",
    originEntityId: "27544008",
    destinationEntityId: "27537542",
    enabled: true, 
  });

  console.log("searchFlight", searchFlights); 

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

  const handleSearch = () => {
    if (searchParams.originSkyId && searchParams.destinationSkyId) {
      executeSearch();
    }
  };

  return (
    <Box
      sx={{
        width: {
          xl: "70%",
          xs: "100%",
          lg: "100%",
          md: "100%",
          sm: "100%",
        },
        mx: "auto",
        mt: -5,
      }}
    >
      <Box
        sx={{
          p: {
            lg: 3,
            md: 1,
            sm: 0,
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Flight}
            alt=""
            style={{
              width: "100%",
              height: "30vh",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: -4,
              right: 100,
              color: "#202124",
            }}
          >
            Flights
          </Typography>
        </Box>
        <Box>
          <Card
            sx={{
              p: 2,
              boxShadow:
                "0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15)",
            }}
          >
            <Box sx={{ width: "40%", display: "flex", gap: 1 }}>
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
                    width: "150px",
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
                    width: "100px",
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
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#70757a",
                }}
              >
                <Select
                  defaultValue={10}
                  variant="standard"
                  sx={{
                    width: "200px",
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
                display: { xs: "block", sm: "block", md: "flex", lg: "flex" },

                gap: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  width: "100%",

                  mb: {
                    md: 3,
                    sm: 3,
                    xs: 3,
                  },
                }}
              >
                <FormControl sx={{ width: "50%" }} variant="outlined">
                  {/* <OutlinedInput
                    placeholder="Where From"
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
                  /> */}

                  <OutlinedInput
                    placeholder="Where From"
                    value={searchParams.originSkyId}
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        originSkyId: e.target.value,
                      })
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <HiOutlineLocationMarker />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl sx={{ width: "50%" }} variant="outlined">
                  {/* <OutlinedInput
                    placeholder="Where To"
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
                  /> */}

                  <OutlinedInput
                    placeholder="Where To"
                    value={searchParams.destinationSkyId}
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        destinationSkyId: e.target.value,
                      })
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <HiOutlineLocationMarker />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box
                sx={{
                  mt: -1,
                  width: "80%",
                }}
              >
                <DateFormat />
              </Box>
            </Box>
          </Card>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            {/* <button
              style={{
                padding: 7,
                width: "100px",
                border: "2px solid rgb(24,90,188)",
                height: "35px",
                borderRadius: "20px",
                backgroundColor: "rgb(24,90,188)",
                color: "white",
              }}
            >
              Search
            </button> */}
            <Button
              // variant="contained"
              onClick={handleSearch}
              disabled={
                isSearching ||
                !searchParams.originSkyId ||
                !searchParams.destinationSkyId
              }
              sx={{
                padding: 1,
                width: "100px",
                border: "2px solid rgb(24,90,188)",
                height: "35px",
                borderRadius: "20px",
                backgroundColor: "rgb(24,90,188)",
                color: "white",
                cursor: "pointer",
              }}
            >
              {isSearching ? <CircularProgress size={20} /> : "Search"}
            </Button>
            <IoIosSearch
              style={{
                position: "absolute",
                top: 10,
                marginRight: 70,
                color: "white",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        // In your component's return statement:
        {flights && flights.length > 0 ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Flight Results
            </Typography>
            <List>
              {flights.map((flight) => (
                <ListItem
                  key={flight.id}
                  sx={{ border: "1px solid #eee", mb: 1 }}
                >
                  <ListItemText
                    primary={`${flight.airline} - $${flight.price}`}
                    secondary={
                      <>
                        <Typography variant="body2">
                          {flight.departureTime} → {flight.arrivalTime}
                        </Typography>
                        <Typography variant="body2">
                          Duration: {flight.duration}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          !isSearching && (
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              No flights found. Try a different search.
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default Flights;
