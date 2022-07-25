import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUs from "../../components/WhyUs";
import OurService from "../../components/OurService";

import { serviceList, ArrayWhyUs } from "../../const/staticData";

const propsService = {
  serviceList,
};

const propsWhyUs = {
  ArrayWhyUs,
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService {...propsService} />
      <WhyUs {...propsWhyUs} />
      <Footer />
    </div>
  );
};

export default Home;
