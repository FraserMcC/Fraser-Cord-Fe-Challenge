import axios from 'axios';

const moviesDbApiKey = "40f49bf4130da17b491d9eeb0f9f35d9";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const fetchMovies = async () => {
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + moviesDbApiKey)
        .then(res => res.data)
        .then(data => data.results)
        .catch(err => err);
}

export const fetchMoviesByKeyword = async (keyword, year) => {
    var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesDbApiKey + (keyword ? "&query=" + keyword : "") + (year ? "&year=" + year : "");
    return await axios.get(url)
        .then(res => res.data)
        .then(data => data.results)
        .catch(err => err);

}

export const movieGenre = async () => {
    return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + moviesDbApiKey)
        .then(res => res.data)
        .then(data => data.genres);
}