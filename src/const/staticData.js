import icoComplete from "../assets/image/icon_complete.png";
import icoPriceTag from "../assets/image/icon_price.png";
import ico24Hrs from "../assets/image/icon_24hrs.png";
import icoProf from "../assets/image/icon_professional.png";
import icoStar from "../assets/image/star.png";
import profPic1 from "../assets/image/prof_pic1.png";
import profPic2 from "../assets/image/prof_pic2.png";
import profPic3 from "../assets/image/prof_pic3.png";

// Static Data Our Service
const serviceList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

// Static Data Why Us

const ArrayWhyUs = [
  {
    icon: icoComplete,
    title: "Mobil Lengkap",
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: icoPriceTag,
    title: "Harga Murah",
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: ico24Hrs,
    title: "Layanan 24 Jam",
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: icoProf,
    title: "Sopir Profesional",
    desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

// Static Data Testimonial
const reviewList = [
  {
    userPic: profPic1,
    star: icoStar,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
  {
    userPic: profPic2,
    star: icoStar,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
  {
    userPic: profPic3,
    star: icoStar,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
];

export { serviceList, ArrayWhyUs, reviewList };
