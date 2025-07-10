import { API } from "../../../utilis/axios";
import { useQuery } from "@tanstack/react-query";
import type { GetNearbyAirportsResponse } from "./type";

type AirportData = GetNearbyAirportsResponse["data"];
const getNearByAirports = async (): Promise<AirportData> => {
  const response = await API.get<GetNearbyAirportsResponse>(
    "flights/getNearByAirports?lat=19.242218017578125&lng=72.85846156046128&locale=en-US"
  );

  return response.data.data;
};

export const useNearByAirports = () => {
  return useQuery<GetNearbyAirportsResponse["data"], Error>({
    queryKey: ["nearbyAirports"],
    queryFn: getNearByAirports,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
    retryDelay: 5000,
  });
};

const getSearchAirPorts = async (): Promise<
  GetNearbyAirportsResponse["data"]
> => {
  const response = await API.get<GetNearbyAirportsResponse>(
    "flights/searchAirport?query=new&locale=en-US"
  );

  return response.data.data;
};

export const useSearchAirPorts = () => {
  return useQuery<GetNearbyAirportsResponse["data"], Error>({
    queryKey: ["searchAirPorts"],
    queryFn: getSearchAirPorts,
    staleTime: Infinity,
    gcTime: Infinity, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
    retryDelay: 5000,
  });
};



interface Flight {
  id: string;
  airline: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
}

interface FlightSearchResponse {
  data: Flight[];
  meta: {
    currency: string;
    count: number;
  };
}


const searchFlights = async (params: {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  cabinClass?: string;
  adults?: number;
  currency?: string;
}): Promise<FlightSearchResponse> => {
  try {
    const response = await API.get<FlightSearchResponse>(
      "/flights/searchFlights",
      {
        params: {
          originSkyId: params.originSkyId,
          destinationSkyId: params.destinationSkyId,
          originEntityId: params.originEntityId,
          destinationEntityId: params.destinationEntityId,
          cabinClass: params.cabinClass || "economy",
          adults: params.adults || 1,
          sortBy: "best",
          currency: params.currency || "USD",
          market: "en-US",
          countryCode: "US",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Flight search failed:", error);
    throw new Error("Failed to fetch flights");
  }
};

interface Flight {
  id: string;
  airline: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
}

interface FlightSearchResponse {
  data: Flight[];
  meta?: {
    currency?: string;
    count?: number;
  };
}
export const useFlightSearch = (searchParams: {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  enabled?: boolean;
}) => {
  return useQuery<Flight[], Error>({
    queryKey: ["search-flight", searchParams],
    queryFn: async () => {
      const response = await searchFlights(searchParams);
      return response.data; 
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    enabled: searchParams.enabled,
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 3000,
  });
};
