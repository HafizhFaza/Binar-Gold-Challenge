import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = (Props) => {
  const { reviewList } = Props;
  const settings = {
    variableWidth: true,
    className: "slider variable-width",
    centerMode: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review-container">
      <div className="review-title">
        <h1>Testimonial</h1>
        <h2>Berbagai review positif dari para pelanggan kami</h2>
      </div>
      <div className="card-container">
        <Slider {...settings}>
          {reviewList.map((item, key) => (
            <div className="card-review" key={key} style={{ width: 619 }}>
              <div className="left-avatar">
                <img className="avatar" src={item.userPic}></img>
              </div>
              <div className="desc-content">
                <img className="star-icon" src={item.star}></img>
                <h2>{item.review}</h2>
                <p>{item.Date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
