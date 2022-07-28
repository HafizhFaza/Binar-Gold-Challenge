import "./style.css";
import iconFacebook from "../../assets/image/icon_facebook.png";
import iconInstagram from "../../assets/image/icon_instagram.png";
import iconTwitter from "../../assets/image/icon_twitter.png";
import iconMail from "../../assets/image/icon_mail.png";
import iconTwitch from "../../assets/image/icon_twitch.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="kontak-container">
        <h1>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
        <h1>binarcarrental@gmail.com</h1>
        <h1>081-233-334-808</h1>
      </div>
      <div className="service-container">
        <a href="#ourservice">Our Services</a>
        <a href="#whyus">Why Us</a>
        <a href="testimonial">Testimonial</a>
        <a href="FAQ">FAQ</a>
      </div>
      <div className="sosmed-container">
        <h1>Connect With Us</h1>
        <div className="sosmed-con">
          <img src={iconFacebook} />
          <img src={iconInstagram} />
          <img src={iconTwitter} />
          <img src={iconMail} />
          <img src={iconTwitch} />
        </div>
      </div>
      <div className="trademark">
        <h1>Copyright Binar 2022</h1>
        <div className="trademark-logo"></div>
      </div>
    </div>
  );
};

export default Footer;
