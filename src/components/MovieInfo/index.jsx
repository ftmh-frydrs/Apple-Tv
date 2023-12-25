import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import axios from 'axios';
import './style.css'

const useMovieInfo = (moviesPerPage) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(moviesPerPage);

  const fetchMovies = async () => {
    const url = `https://moviesapi.ir/api/v1/movies?page=${page}`;

    try {
      const response = await axios.get(url);

      const moviesData = response.data.data;
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const loadMoreMovies = () => {
    fetchMovies();
  };

  return { movies, loadMoreMovies };
};

const MovieInfo = ({ moviesPerPage , title , ...rest}) => {
  const { movies, loadMoreMovies } = useMovieInfo(moviesPerPage);

  return (
    <div {...rest}>
      <p className='text-xl m-5'>{title}</p>
      <Swiper
        className='mt-5'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        moviesPerPage ={moviesPerPage}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div>
              <img className='w-[90%] h-[150px] px-3 rounded-lg' src={movie.poster} alt={movie.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieInfo;
