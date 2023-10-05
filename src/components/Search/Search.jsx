import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyle,
} from './Search.styled';

const Searchbar = ({ onSubmitSearchBar, value }) => (
  <SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search movies"
      />
    </SearchForm>
  </SearchbarStyle>
);

export default Searchbar;
