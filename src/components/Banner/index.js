import "./style.css";
import BannerImage from "../../assets/image/img_car.png";

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="left-container">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <h2>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </h2>
        <a href="#" className="hero-left-button">
          Mulai Sewa Mobil
        </a>
      </div>
      <img src={BannerImage}></img>
    </div>
  );
};

export default Banner;
