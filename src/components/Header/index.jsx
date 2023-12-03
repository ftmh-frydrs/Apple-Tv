import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Header = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      className="w-full"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
    >
      <SwiperSlide className="w-full">
        <img
          className="w-full" 
          src="https://is1-ssl.mzstatic.com/image/thumb/uSzgbcE8ABK93r6BwYQrbQ/3358x1889sr.webp"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img
          className="w-full"
          src="https://is1-ssl.mzstatic.com/image/thumb/OFHNmCIAhV3ZWgWz09nXIA/3358x1889sr.webp"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img
          className="w-full"
          src="https://is1-ssl.mzstatic.com/image/thumb/PaEv2CVjODim9DdTM6girQ/3358x1889sr.webp"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img
          className="w-full"
          src="https://is1-ssl.mzstatic.com/image/thumb/qz8hNIZ3ZCO1hVycb15f_Q/3358x1889sr.webp"
          alt="..."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
