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
  const [fdata, setFData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      setFData([]);
      setNotFound(false);
    }
  };

  const handleSearch = () => {
    const newArray = data.filter((item) => item.name === name);
    if (!newArray.length) {
      setNotFound(true);
    }
    setFData(newArray);
  };

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car") //get API nya
      .then((res) => setData(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);

  console.log("data daata", data);
  console.log("data fdata", fdata);
  const props = { data, name, handleChangeName, handleSearch };
  return (
    <div>
      <Navbar />
      <BannerCar />
      <SearchToolbar {...props} />
      {!!notFound && <h1>Mobil Tidak Ditemukan</h1>}
      <CarList data={!fdata.length ? data : fdata} />
      <Footer />
    </div>
  );
};

export default Cars;
