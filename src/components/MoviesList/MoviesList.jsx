import { Link, useLocation } from 'react-router-dom';
import { LiStyle, UlStyle } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <UlStyle>
      {films.map(({ id, title, overview }) => (
        <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
          <LiStyle>
            <h3>{title}</h3>
          </LiStyle>
        </Link>
      ))}
    </UlStyle>
  );
};

export default MoviesList;
