import "./style.css";

const SearchToolbar = () => {
  return (
    <div className="tool-container">
      <div className="search-tool">
        <p>Nama Mobil</p>
        <input type="search" placeholder="Ketik nama/tipe mobil" />
      </div>
      <div className="capacity-tool">
        <p>Kategori</p>
        <select
          name="kapasitas"
          id="kapasitas"
          placeholder="Masukan Kapasitas Mobil"
        >
          <option value="2-4 orang">2-4 Orang</option>
          <option value="6-8 orang">6-8 Orang</option>
        </select>
      </div>
      <div className="price-tool">
        <p>Harga</p>
        <select
          name="harga"
          id="harga"
          placeholder="Masukan Harga Sewa per Hari"
        >
          <option value="350000">Rp. 350.000 </option>
          <option value="400000">Rp. 400.000 - Rp. 600.000</option>
          <option value="700000-1000000">Rp. 700.000 - Rp. 1000.000</option>
        </select>
      </div>
      <div className="status-tool">
        <p>Status</p>
        <select name="status" id="status" placeholder="Disewa">
          <option value="disewa">Disewa</option>
          <option value="tersedia">Tersedia</option>
        </select>
      </div>
    </div>
  );
};

export default SearchToolbar;
