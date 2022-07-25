import "./style.css";
import ServicesImage from "../../assets/image/img_service.png";
import CheckIcon from "../../assets/image/CheckIco.png";

const OurService = (Props) => {
  const { serviceList } = Props;
  return (
    <div className="Service-Container">
      <img src={ServicesImage}></img>
      <div className="Service-Description">
        <h1 className="Desc-Title">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h1>
        <h1 className="Desc-Center">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </h1>
        <ul className="List">
          <li>
            <img src={CheckIcon}></img>
            {serviceList[0]}
          </li>
          <li>
            <img src={CheckIcon}></img>
            {serviceList[1]}
          </li>
          <li>
            <img src={CheckIcon}></img>
            {serviceList[2]}
          </li>
          <li>
            <img src={CheckIcon}></img>
            {serviceList[3]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurService;
