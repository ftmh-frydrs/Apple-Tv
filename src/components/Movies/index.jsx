// import React from "react";
import MovieInfo from "../MovieInfo";
import Divider from "../Divider";

const Movies = () => {
  return (
    <>
      <MovieInfo moviesPerPage={1} title="Top Chart : Movies >" />
      <Divider />
      <MovieInfo moviesPerPage={2} title="Top Chart : Serial >" />
      <Divider />
      <MovieInfo moviesPerPage={3} title="Top Chart : Movies >" />
    </>
  );
};

export default Movies;
