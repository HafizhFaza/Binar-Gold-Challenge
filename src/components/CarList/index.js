import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      {!!data.length &&
        data.map((item) => (
          <div>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <Link to={`/detailmobil/${item.id}`}>
                <button>Pilih Mobil</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CarList;
