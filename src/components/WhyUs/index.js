import "./style.css";

const WhyUs = (Props) => {
  const { ArrayWhyUs } = Props;
  console.log(ArrayWhyUs);
  return (
    <div className="Why-Us-Container">
      <div className="Why-Us-Title-Desc">
        <h1>Why Us?</h1>
        <h2>Mengapa harus pilih Binar Car Rental?</h2>
      </div>
      <div className="card-list-item">
        {ArrayWhyUs.map((item, key) => (
          <div className="card-content" key={key}>
            <img src={item.icon}></img>
            <h1>{item.title}</h1>
            <h2>{item.desc}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
