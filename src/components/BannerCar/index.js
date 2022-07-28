import "./style.css";
import BannerImage from "../../assets/image/img_car.png";
import { Link } from "react-router-dom";

const BannerCar = () => {
  return (
    <div className="hero-section">
      <div className="left-container">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <h2>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </h2>
      </div>
      <img src={BannerImage}></img>
    </div>
  );
};

export default BannerCar;
