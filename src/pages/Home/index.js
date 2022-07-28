import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUs from "../../components/WhyUs";
import OurService from "../../components/OurService";
import Testimonial from "../../components/Testimonial";
import Cta from "../../components/Cta";
import Sidebar from "../../components/Sidebar";

import {
  serviceList,
  ArrayWhyUs,
  reviewList,
  listFAQ,
  staticKontak,
} from "../../const/staticData";
import Faq from "../../components/Faq";

const propsService = {
  serviceList,
};

const propsWhyUs = {
  ArrayWhyUs,
};

const propsTestimonial = {
  reviewList,
};

const propsFAQ = {
  listFAQ,
};

const propsFooter = {
  staticKontak,
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService {...propsService} />
      <WhyUs {...propsWhyUs} />
      <Testimonial {...propsTestimonial} />
      <Cta />
      <Faq {...propsFAQ} />
      <Footer {...propsFooter} />
    </div>
  );
};

export default Home;
