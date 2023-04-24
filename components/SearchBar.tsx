import styled from "styled-components";

const SearchContainer = styled.div``;
const SearchInput = styled.input``;
const SearchButton = styled.button``;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
      <SearchButton>+</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
