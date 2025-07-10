import { API } from "../../../utilis/axios";
import { useQuery } from "@tanstack/react-query";
const getHotelSearchDestination = async () => {
  const response = await API.get("hotels/searchDestinationOrHotel?query=new");
  return response.data;
};

export const useHotelSearchDestination = () => {
  return useQuery({
    queryKey: ["hotelSearchDestination"],
    queryFn: getHotelSearchDestination,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
    retryDelay: 5000,
  });
};

const getHotelDetails = async () => {
  const response = await API.get(
    "hotels/getHotelDetails?hotelId=106005202&entityId=27537542&currency=USD&market=en-US&countryCode=US"
  );
  return response.data;
};

export const useGetHotelDetail = () => {
  return useQuery({
    queryKey: ["hotel-get-detail"],
    queryFn: getHotelDetails,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
    retryDelay: 5000,
  });
};
