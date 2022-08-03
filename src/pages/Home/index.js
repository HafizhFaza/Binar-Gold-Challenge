import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUs from "../../components/WhyUs";
import OurService from "../../components/OurService";
import Testimonial from "../../components/Testimonial";
import Cta from "../../components/Cta";
import Faq from "../../components/Faq";
import ResponsNav from "../../components/ResponsNav";

import {
  serviceList,
  ArrayWhyUs,
  reviewList,
  listFAQ,
  staticKontak,
  navList,
} from "../../const/staticData";

const propsNav = {
  navList,
};

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
      <ResponsNav />
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
