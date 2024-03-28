import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Movies from "../../components/Movies";
import ImageSwiperItem from "../../components/ImageSwiperItem";
import picture_2 from "../../assets/img/1320x495sr.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Movies />
      <ImageSwiperItem />
      <Link>
        <img className="mx-auto mt-10 rounded-md" src={picture_2} />
      </Link>
    </>
  );
};

export default Home;
