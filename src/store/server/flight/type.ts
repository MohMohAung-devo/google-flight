

export interface FlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: string;
  localizedName: string;
}

export interface HotelParams {
  entityId: string;
  entityType: string;
  localizedName: string;
}

export interface Navigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: FlightParams;
  relevantHotelParams: HotelParams;
}

export interface Presentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface AirportSuggestion {
  presentation: Presentation;
  navigation: Navigation;
}

export interface GetNearbyAirportsResponse {
  status: boolean;
  timestamp: number;
  data: {
    current: AirportSuggestion & {
      skyId: string;
    };
    nearby: AirportSuggestion[];
    recent: AirportSuggestion[];
  };
}
