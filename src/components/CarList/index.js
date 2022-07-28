import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const CarList = () => {
  const [data, setData] = useState([]);
  console.log("data ini adalah", data);
  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car") //get API nya
      .then((res) => setData(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);
  return (
    <div className="car-container">
      {!!data.length &&
        data.map((item) => (
          <div className="car-card-container">
            <div clasName="car-card-content">
              <div className="car-image">
                <img src={item.image} alt="" />
              </div>
              <div className="car-detail">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <Link to={`/detailmobil/${item.id}`}>
              <a className="car-select">Pilih Mobil</a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CarList;
