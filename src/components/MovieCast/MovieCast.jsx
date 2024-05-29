import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { fetchMovieCastById } from "../../fetchMovies";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMovieCastById(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {cast && (
              <ul className={css.cast }>
          {cast.map((actor) => (
            <li key={nanoid()}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <div>
                <p>{actor.name}</p>
                <p>
                  Character: <span>{actor.character}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  );
}
