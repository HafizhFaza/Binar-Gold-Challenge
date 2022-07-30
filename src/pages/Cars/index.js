import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import BannerCar from "../../components/BannerCar";
import SearchToolbar from "../../components/SearchToolbar";
import { useState, useEffect } from "react";
import axios from "axios";

const Cars = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSearch = () => {
    const newArray = data.filter((item) => item.name === name);
    setData(newArray);
  };
  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car") //get API nya
      .then((res) => setData(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);

  console.log("data ini name", name);
  const props = { data, name, handleChangeName, handleSearch };
  return (
    <div>
      <Navbar />
      <BannerCar />
      <SearchToolbar {...props} />
      <CarList {...props} />
      <Footer />
    </div>
  );
};

export default Cars;
