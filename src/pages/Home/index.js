import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import OurService from "../../components/OurService";

import { serviceList } from "../../const/staticData";

const propsService = {
  serviceList,
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService {...propsService} />
      <Footer />
    </div>
  );
};

export default Home;
