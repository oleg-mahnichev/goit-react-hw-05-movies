import { Loader } from 'components/Loader/Loader';
import { LiStyle, UlStyle } from './Cast.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, onFetchError } from 'services/api';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <UlStyle>
          {cast.map(({ id, name, character, profile_path }) => (
            <LiStyle key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
                }
                alt={name}
                width="150"
              />
              <b>{name}</b>
              <p>{character}</p>
            </LiStyle>
          ))}
        </UlStyle>
      ) : (
        <p>Sorry! There is any information about cast</p>
      )}
    </>
  );
};

export default Cast;
