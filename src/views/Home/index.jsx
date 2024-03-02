import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Movies from "../../components/Movies";
import ImageSwiperItem from "../../components/ImageSwiperItem"



const Home = () => {
    return (
        <>
         <Navbar />
        <Header />
        <Movies/>
        <ImageSwiperItem />
        </>
    )
};


export default Home;