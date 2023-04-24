import styled, { css } from "styled-components";
import { IContact } from "@/types";
import {
  deleteContact,
  updateContact,
} from "../pureFunctions/contactsApiHelpers";
import { useState } from "react";
import EditableField from "./EditableField";
import { useRouter } from "next/router";

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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
`;

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  buttonType: "delete" | "edit" | "save";
  children: React.ReactNode;
}

const Button = styled.button<IButton>`
  all: unset;
  cursor: pointer;
  padding: 8px;

  &:focus {
    outline: yellow 5px auto;
  }
  color: white;
  background: ${({ buttonType }) =>
    buttonType === "delete" ? "red" : "green"};
`;

const Contact = ({
  contact,
  selected,
  onClick,
  editing,
  onEditButtonClick,
}: {
  contact: IContact;
  selected: boolean;
  onClick: () => void;
  editing: boolean;
  onEditButtonClick: () => void;
}) => {
  const [name, setName] = useState<string>(contact.name);
  const [email, setEmail] = useState<string>(contact.email);
  const [phone, setPhone] = useState<string>(contact.phone);

  // const [editing, setEditing] = useState<boolean>(false);

  const router = useRouter();

  const readableBirthday = new Date(contact.birthday).toLocaleDateString();
  const createdAtDateObj = new Date(contact.birthday);
  const readableCreatedAt = `${createdAtDateObj.toLocaleDateString()} ${createdAtDateObj.toLocaleTimeString()}`;

  return (
    <ContactContainer onClick={onClick}>
      <MainInfo>
        <AvatarImage src={contact.avatar} />
        <Name>
          <EditableField
            value={name}
            editing={editing}
            onChange={(e) => setName(e.target.value)}
          />
        </Name>
      </MainInfo>
      {selected ? (
        <>
          <OtherInfo>
            <div>
              Email:{" "}
              <EditableField
                value={email}
                editing={editing}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              Phone:{" "}
              <EditableField
                value={phone}
                editing={editing}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>Birthday: {readableBirthday}</div>
            <div>Created: {readableCreatedAt}</div>
          </OtherInfo>
          <ButtonsContainer>
            {editing ? (
              <>
                <Button
                  buttonType="save"
                  onClick={async () => {
                    await updateContact({
                      ...contact,
                      name,
                      email,
                      phone,
                    });
                    router.reload();
                  }}
                >
                  Save
                </Button>
                <Button
                  buttonType="delete"
                  onClick={async () => {
                    await deleteContact(contact.id);
                    router.reload();
                  }}
                >
                  Delete
                </Button>
              </>
            ) : (
              <Button buttonType="edit" onClick={onEditButtonClick}>
                Edit
              </Button>
            )}
          </ButtonsContainer>
        </>
      ) : null}
    </ContactContainer>
  );
};

export default Contact;
