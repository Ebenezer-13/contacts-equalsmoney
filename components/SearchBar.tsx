import styled from "styled-components";

const SearchInput = styled.input``;
const SearchButton = styled.button``;

const SearchBar = () => {
  return (
    <>
      <SearchInput type="text" placeholder="Search" />
      <SearchButton>+</SearchButton>
    </>
  );
};

export default SearchBar;
