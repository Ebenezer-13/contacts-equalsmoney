import React from "react";
import { IContact } from "@/types";
import styled from "styled-components";
import ContactList from "@/components/Contacts";
import SearchBar from "@/components/SearchBar";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: "light-blue";
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const ContentContainer = styled.div`
  max-width: 800px;

  @media (max-width: 800px) {
    padding: 0 16px;
  }
`;

const Contacts = ({ contacts }: { contacts: IContact[] }) => {
  return (
    <PageContainer>
      <Header>
        <SearchBar />
      </Header>
      <ContentContainer>
        <ContactList contacts={contacts} />
      </ContentContainer>
    </PageContainer>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    "https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts"
  );
  const contacts = await response.json();
  return {
    props: { contacts },
  };
}

export default Contacts;
