import React, { useState, useEffect } from 'react';
import fullUrl from '../../utility/axios';
import requests from '../../utility/request';
import './Banner.css';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await fullUrl.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]);
            return request;
        }
        fetchData()
    }, [])

    // console.log(movie)

    /* Sorting max length Description with 3 dots */
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        >

            <div className="banner__contents">
                {/* Title */}
                <h1 className="banner__title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>

                {/* button and Description */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h2 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h2>

            </div>


            

        </header>
    );
};

export default Banner;