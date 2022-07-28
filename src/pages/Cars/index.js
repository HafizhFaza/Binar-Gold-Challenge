import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import BannerCar from "../../components/BannerCar";

const Cars = () => {
  return (
    <div>
      <Navbar />
      <BannerCar />
      <CarList />
      <Footer />
    </div>
  );
};

export default Cars;
