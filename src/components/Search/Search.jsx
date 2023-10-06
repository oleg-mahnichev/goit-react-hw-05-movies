import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyle,
} from './Search.styled';

const Searchbar = ({ onSubmitSearchBar, value }) => (
  <SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search movies"
      />
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>
    </SearchForm>
  </SearchbarStyle>
);

export default Searchbar;
