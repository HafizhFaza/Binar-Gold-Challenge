import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import BannerCar from "../../components/BannerCar";
import SearchToolbar from "../../components/SearchToolbar";

const Cars = () => {
  return (
    <div>
      <Navbar />
      <BannerCar />
      <SearchToolbar />
      <CarList />
      <Footer />
    </div>
  );
};

export default Cars;
