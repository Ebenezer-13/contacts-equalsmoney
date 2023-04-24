import { IContact } from "@/types";
import Contact from "./Contact";
import { useState } from "react";

const ContactList = ({ contacts }: { contacts: IContact[] }) => {
  const [selectedIdx, setSelectedIdx] = useState<Number>(-1);
  return (
    <>
      {contacts.map((contact, idx) => (
        <Contact
          key={contact.name}
          contact={contact}
          selected={idx === selectedIdx}
          onClick={() => idx !== selectedIdx && setSelectedIdx(idx)}
        />
      ))}
    </>
  );
};

export default ContactList;
