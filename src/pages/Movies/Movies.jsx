import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Search/Search';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies, onFetchError, paramsForNotify } from 'services/api';
import { SectionStyle } from '../styles/Pages.styled';

const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      setFilms([]); // Очищаем фильмы, если запрос пустой
      return;
    }

    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        if (data.results.length === 0) {
          Notify.warning(
            'We don`t have any Movies with this Name',
            paramsForNotify
          );
        }
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const onSubmitSearchBar = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '') {
      Notify.info('Enter new Search please!', paramsForNotify);
      setSearchParams({});
      setFilms([]);
      return;
    }

    if (searchValue === searchQuery) {
      Notify.info('Enter new Search please! ', paramsForNotify);
      return;
    }

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <div>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <SectionStyle>
        {loading && <Loader />}
        {!loading && films.length === 0 && <p></p>}
        {films.length > 0 && <MoviesList films={films} />}
      </SectionStyle>
    </div>
  );
};

export default Movies;
