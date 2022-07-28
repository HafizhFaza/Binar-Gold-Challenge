import "./style.css";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div id="cta" className="cta-banner">
      <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </h2>
      <Link to={"/findmobil"} style={{ textDecoration: "none" }}>
        <a className="cta-button">Mulai Sewa Mobil</a>
      </Link>
    </div>
  );
};

export default Cta;
