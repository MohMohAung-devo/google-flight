import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
  Alert,
  OutlinedInput,
} from "@mui/material";

import { LuArrowLeftRight } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

interface Flight {
  id: string;
  airline: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  departureAirport: string;
  arrivalAirport: string;
}

interface Airport {
  skyId: string;
  entityId: string;
  name: string;
  city: string;
}

const Flights = () => {
  const [searchParams, setSearchParams] = useState({
    originSkyId: "",
    destinationSkyId: "",
    originEntityId: "",
    destinationEntityId: "",
    cabinClass: "economy",
    adults: 1,
    departureDate: "",
    returnDate: "",
  });

  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  const airports: Airport[] = [
    {
      skyId: "LOND",
      entityId: "27544008",
      name: "London Heathrow",
      city: "London",
    },
    {
      skyId: "NYCA",
      entityId: "27537542",
      name: "John F. Kennedy",
      city: "New York",
    },
    {
      skyId: "LAXA",
      entityId: "27537543",
      name: "Los Angeles",
      city: "Los Angeles",
    },
    { skyId: "CHIA", entityId: "27537544", name: "O'Hare", city: "Chicago" },
  ];

  const searchFlights = async () => {
    setIsSearching(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockFlights: Flight[] = [
        {
          id: "1",
          airline: "Delta Airlines",
          price: 450,
          departureTime: "08:00 AM",
          arrivalTime: "11:30 AM",
          duration: "3h 30m",
          stops: 0,
          departureAirport: "JFK",
          arrivalAirport: "LAX",
        },
        {
          id: "2",
          airline: "American Airlines",
          price: 380,
          departureTime: "10:15 AM",
          arrivalTime: "02:45 PM",
          duration: "4h 30m",
          stops: 1,
          departureAirport: "JFK",
          arrivalAirport: "LAX",
        },
      ];

      setFlights(mockFlights);
    } catch (err) {
      setError("Failed to search flights. Please try again.");
      console.error("Flight search error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = () => {
    if (!searchParams.originSkyId || !searchParams.destinationSkyId) {
      setError("Please select origin and destination airports");
      return;
    }

    if (tripType === "round-trip" && !searchParams.returnDate) {
      setError("Please select return date for round trip");
      return;
    }

    searchFlights();
  };

  const handleAirportSelect = (
    type: "origin" | "destination",
    airport: Airport
  ) => {
    setSearchParams({
      ...searchParams,
      [`${type}SkyId`]: airport.skyId,
      [`${type}EntityId`]: airport.entityId,
    });
  };

  const handleDateChange = (type: "departure" | "return", date: string) => {
    setSearchParams({
      ...searchParams,
      [`${type}Date`]: date,
    });
  };

  const handlePassengerChange = (
    type: "adults" | "children" | "infants",
    value: number
  ) => {
    const newPassengers = {
      ...passengers,
      [type]: value,
    };
    setPassengers(newPassengers);
    setSearchParams({
      ...searchParams,
      adults: newPassengers.adults,
    });
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
        Book Flights
      </Typography>

      <Card sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <FormControl fullWidth>
            <Select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LuArrowLeftRight size={16} />
                </InputAdornment>
              }
            >
              <MenuItem value="round-trip">Round trip</MenuItem>
              <MenuItem value="one-way">One-way</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select
              value={0}
              startAdornment={
                <InputAdornment position="start">
                  <IoPersonOutline size={16} />
                </InputAdornment>
              }
              renderValue={() =>
                `${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}`
              }
            >
              <MenuItem>
                <Box sx={{ p: 2, minWidth: 250 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography>Adults</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Button
                        onClick={() =>
                          handlePassengerChange(
                            "adults",
                            Math.max(1, passengers.adults - 1)
                          )
                        }
                        disabled={passengers.adults <= 1}
                      >
                        -
                      </Button>
                      <Typography>{passengers.adults}</Typography>
                      <Button
                        onClick={() =>
                          handlePassengerChange("adults", passengers.adults + 1)
                        }
                      >
                        +
                      </Button>
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
                      <Typography>Children</Typography>
                      <Typography variant="body2">Aged 2-11</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Button
                        onClick={() =>
                          handlePassengerChange(
                            "children",
                            Math.max(0, passengers.children - 1)
                          )
                        }
                        disabled={passengers.children <= 0}
                      >
                        -
                      </Button>
                      <Typography>{passengers.children}</Typography>
                      <Button
                        onClick={() =>
                          handlePassengerChange(
                            "children",
                            passengers.children + 1
                          )
                        }
                      >
                        +
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography>Infants</Typography>
                      <Typography variant="body2">Under 2</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Button
                        onClick={() =>
                          handlePassengerChange(
                            "infants",
                            Math.max(0, passengers.infants - 1)
                          )
                        }
                        disabled={passengers.infants <= 0}
                      >
                        -
                      </Button>
                      <Typography>{passengers.infants}</Typography>
                      <Button
                        onClick={() =>
                          handlePassengerChange(
                            "infants",
                            passengers.infants + 1
                          )
                        }
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select
              value={searchParams.cabinClass}
              onChange={(e) =>
                setSearchParams({ ...searchParams, cabinClass: e.target.value })
              }
            >
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="premium-economy">Premium Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="first">First</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <FormControl fullWidth>
              <Select
                value={searchParams.originSkyId}
                onChange={(e) => {
                  const airport = airports.find(
                    (a) => a.skyId === e.target.value
                  );
                  if (airport) handleAirportSelect("origin", airport);
                }}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <HiOutlineLocationMarker />
                  </InputAdornment>
                }
                renderValue={(selected) => {
                  if (!selected) return "From";
                  const airport = airports.find((a) => a.skyId === selected);
                  return airport ? `${airport.city} (${airport.name})` : "From";
                }}
              >
                <MenuItem value="" disabled>
                  Select origin
                </MenuItem>
                {airports.map((airport) => (
                  <MenuItem key={airport.skyId} value={airport.skyId}>
                    {airport.city} ({airport.name})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <Select
                value={searchParams.destinationSkyId}
                onChange={(e) => {
                  const airport = airports.find(
                    (a) => a.skyId === e.target.value
                  );
                  if (airport) handleAirportSelect("destination", airport);
                }}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <HiOutlineLocationMarker />
                  </InputAdornment>
                }
                renderValue={(selected) => {
                  if (!selected) return "To";
                  const airport = airports.find((a) => a.skyId === selected);
                  return airport ? `${airport.city} (${airport.name})` : "To";
                }}
              >
                <MenuItem value="" disabled>
                  Select destination
                </MenuItem>
                {airports.map((airport) => (
                  <MenuItem key={airport.skyId} value={airport.skyId}>
                    {airport.city} ({airport.name})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{ display: "flex", gap: 2, width: { xs: "100%", md: "40%" } }}
          >
            <FormControl fullWidth>
              <OutlinedInput
                type="date"
                value={searchParams.departureDate}
                onChange={(e) => handleDateChange("departure", e.target.value)}
                placeholder="Departure"
              />
            </FormControl>
            {tripType === "round-trip" && (
              <FormControl fullWidth>
                <OutlinedInput
                  type="date"
                  value={searchParams.returnDate}
                  onChange={(e) => handleDateChange("return", e.target.value)}
                  placeholder="Return"
                />
              </FormControl>
            )}
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleSearch}
          disabled={isSearching}
          startIcon={
            isSearching ? <CircularProgress size={20} /> : <IoIosSearch />
          }
        >
          {isSearching ? "Searching..." : "Search Flights"}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Card>

      {flights.length > 0 ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Available Flights
          </Typography>

          {flights.map((flight) => (
            <Card key={flight.id} sx={{ mb: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{flight.airline}</Typography>
                  <Typography variant="h5" color="primary">
                    ${flight.price}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {flight.departureTime}
                    </Typography>
                    <Typography variant="body2">
                      {flight.departureAirport}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2">{flight.duration}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Chip
                      label={
                        flight.stops === 0
                          ? "Direct"
                          : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`
                      }
                      size="small"
                    />
                  </Box>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="body1" fontWeight="bold">
                      {flight.arrivalTime}
                    </Typography>
                    <Typography variant="body2">
                      {flight.arrivalAirport}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        !isSearching && (
          <Typography variant="body1" sx={{ textAlign: "center", my: 4 }}>
            {error ? "" : "Search for flights to see results"}
          </Typography>
        )
      )}
    </Box>
  );
};

export default Flights;
