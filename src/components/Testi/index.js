import React from "react";
import "./style.css";
import { Container, Row } from "react-bootstrap";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillStarFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testi(props) {
  const { reviewList } = props;
  return (
    <section id="testimonial">
      <Container>
        <Row>
          <div className="header-testimonial">
            <h5>Testimonial</h5>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <Swiper
            className="container testimonials__container"
            // install Swiper modules
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 1,
              },
              768: {
                width: 350,
                slidesPerView: 1,
              },
            }}
            autoplay={{ delay: 2500 }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            //                 slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reviewList.map((item, key) => {
              return (
                <SwiperSlide className="testimonial">
                  <div className="client_avatar">
                    <img src={item.userPic} alt="Avatar One" />
                  </div>
                  <div className="client__content">
                    <div className="star">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <h6 className="client__review mt-2">"{item.review}"</h6>
                    <small className="client__name">{item.Date}</small>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
}

export default Testi;
