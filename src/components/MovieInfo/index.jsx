// MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            apikey: 'f11d479',
            s: searchQuery,
          },
        });
        setMovies(response.data.Search);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper className='mt-5'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.imdbID}>
          <div>
            <img className='w-[100%] h-[250px] px-3' src={movie.Poster} alt={movie.Title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieList;
