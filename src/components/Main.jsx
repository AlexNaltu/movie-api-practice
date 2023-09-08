"use client";

import React, { useEffect, useState } from "react";
import requests from "@/Requests";
import axios from "axios";
import Image from "next/image";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="/"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[550px] object-cover bg-center"
          priority
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black boder-gray-300 py-2 px-5">Play</button>
            <button className="border text-white  boder-gray-300 py-2 px-5 ml-6">Watch Later</button>
          </div>
          <p className="text-gray-500 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
