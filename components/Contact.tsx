import styled, { css } from "styled-components";
import { IContact } from "@/types";

const ContactContainer = styled.div`
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family: Arial, "sans-serif";
  font-size: 14px;
  margin-bottom: 4px;
  background-color: grey;
`;

const MainInfo = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;
`;

const AvatarImage = styled.div`
  ${({ src }: { src: string }) => css`
    height: 24px;
    width: 24px;
    background: url(${src});
    background-size: cover;
    margin-right: 8px;
  `}
`;

const Name = styled.div`
  width: 100%;
`;

const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  font-size: 10px;
`;

const Contact = ({
  contact,
  selected,
  onClick,
}: {
  contact: IContact;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <ContactContainer onClick={onClick}>
      <MainInfo>
        <AvatarImage src={contact.avatar} />
        <Name>{contact.name}</Name>
      </MainInfo>
      {selected ? (
        <OtherInfo>
          <div>Email: {contact.email}</div>
          <div>Phone: {contact.phone}</div>
          <div>Birthday: {contact.birthday}</div>
          <div>Created: {contact.createdAt}</div>
        </OtherInfo>
      ) : null}
    </ContactContainer>
  );
};

export default Contact;
