import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const api_read_access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQ1ZmQzYzc3NjUzZmRjOWQxYTJhNzYyMTM2YzYzNCIsInN1YiI6IjY2NTc0MGIyYmZhYjg0OTg3ODU5OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QaPfqM-h8JA68hSPJJu1omKu3xB4eop8jJOGwpSpVUw";
const API_KEY = "2f45fd3c77653fdc9d1a2a762136c634";

const options = {
  headers: {
    Authorization: `Bearer ${api_read_access_token}`,
  },
};

export const fetchTrendingMovies = async (currentPage) => {
  try {
    const response = await axios.get(
      `/3/trending/movie/day?api_key=${API_KEY}&page=${currentPage}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const fetchMoviesList = async (searchQuery, currentPage) => {
  try {
    const response = await axios.get("/3/search/movie", {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        page: currentPage,
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(
      `/3/movie/${id}?api_key=${API_KEY}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};

export const fetchMovieCastById = async (id) => {
  try {
    const response = await axios.get(
      `/3/movie/${id}/credits?api_key=${API_KEY}`,
      options
    );
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast by ID:", error);
    throw error;
  }
};

export const fetchMovieReviewsById = async (id) => {
  try {
    const response = await axios.get(
      `/3/movie/${id}/reviews?api_key=${API_KEY}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie cast by ID:", error);
    throw error;
  }
};
