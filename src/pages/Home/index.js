import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUs from "../../components/WhyUs";
import OurService from "../../components/OurService";
import Testimonial from "../../components/Testimonial";
import Testi from "../../components/Testimonial";

import { serviceList, ArrayWhyUs, reviewList } from "../../const/staticData";

const propsService = {
  serviceList,
};

const propsWhyUs = {
  ArrayWhyUs,
};

const propsTestimonial = {
  reviewList,
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService {...propsService} />
      <WhyUs {...propsWhyUs} />
      <Testimonial {...propsTestimonial} />
      <Footer />
    </div>
  );
};

export default Home;
