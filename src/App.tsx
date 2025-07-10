import { BrowserRouter, Route, Routes } from "react-router-dom";
import Travel from "./pages/travel/Travel";
import Explore from "./pages/explore/Explore";
import Layout from "./layout/Layout";
import Flights from "./pages/flights/Flights";
import Hotels from "./pages/hotels/Hotels";
import HolidayRentals from "./pages/holiday-rentals/HolidayRentals";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Travel />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/holiday-rentals" element={<HolidayRentals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
