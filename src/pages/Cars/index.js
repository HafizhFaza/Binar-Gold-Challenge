import ResponsNav from "../../components/ResponsNav";
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
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      setFData([]);
      setNotFound(false);
    }
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSearch = () => {
    const newArray = data.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!newArray.length) {
      setNotFound(true);
    }
    setFData(newArray);
  };
  const handleCategory = () => {
    const newArray = data.filter((item) => item.category == category);
    if (!newArray.length) {
      setNotFound(true);
    }
    setFData(newArray);
  };
  const handlePrice = () => {
    const newArray = data.filter((item) => item.price == price);
    if (!newArray.length) {
      setNotFound(true);
    }
    setFData(newArray);
  };

  const handleStatus = () => {
    const newArray = data.filter((item) => item.status == status);
    if (!newArray.length) {
      setNotFound(true);
    }
    setFData(newArray);
  };

  const combineHandle = () => {
    // try {
    //   let response = await axios.get(
    //     "https://bootcamp-rent-car.herokuapp.com/admin/car"
    //   );
    //   let carList = await response.data;
    //   if (name === "" && !category) {
    //     setData(carList);
    //   } else if (name !== "" && category !== "") {
    //     carList = carList.filter(
    //       (item) => item.name.toLowerCase() === name.toLocaleLowerCase()
    //     );
    //     carList = carList.filter((item) => item.category === category);
    //     setData(carList);
    //   } else if (name !== "") {
    //     carList = carList.filter(
    //       (item) => item.name.toLowerCase() === name.toLocaleLowerCase()
    //     );
    //     setData(carList);
    //   } else if (category !== "") {
    //     carList = carList.filter((item) => item.category === category);
    //     setData(carList);
    //   }
    // } catch (error) {
    //   console.log("error");
    // }
    if (name) handleSearch();
    if (category) handleCategory();
    if (price) handlePrice();
    if (status) handleStatus();
  };

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car") //get API nya
      .then((res) => setData(res.data)) //jika berhasil
      .catch((err) => console.log(err)); //jika gagal
  }, []);

  // console.log("data daata", data);
  // console.log("data fdata", fdata);
  const props = {
    data,
    name,
    handleChangeName,
    handleSearch,
    handleChangeCategory,
    handleCategory,
    handlePrice,
    handleChangePrice,
    combineHandle,
    handleChangeStatus,
  };

  console.log(category);
  return (
    <div>
      <ResponsNav />
      <BannerCar />
      <SearchToolbar {...props} />
      {!!notFound && <h1>Mobil Tidak Ditemukan</h1>}
      <CarList data={!fdata.length ? data : fdata} />
      <Footer />
    </div>
  );
};

export default Cars;
