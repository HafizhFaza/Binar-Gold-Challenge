import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCar = () => {
  const [car, setCar] = useState({});

  const param = useParams();
  const id = param.id;
  console.log(car);
  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);

  return (
    <>
      {car ? (
        <div>
          <img src={car?.image}></img>
          <h1>{car?.name}</h1>
          <h1>{car?.price}</h1>
        </div>
      ) : (
        <div>
          <h1>tidak ada mobel coey</h1>
        </div>
      )}
    </>
  );
};

export default DetailCar;
