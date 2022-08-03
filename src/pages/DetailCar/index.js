import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarDetail from "../../components/CarDetail";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchToolbar from "../../components/SearchToolbar";
import BannerCar from "../../components/BannerCar";
import { include, exclude, reOrder } from "../../const/staticData";

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

  const props = { car, include, exclude, reOrder };

  return (
    <div>
      <ResponsNav />
      <BannerCar />
      <SearchToolbar />
      <CarDetail {...props} />
      <Footer />
    </div>
  );
};

export default DetailCar;
