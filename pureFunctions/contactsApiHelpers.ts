import type { IContact } from "../types";

export const baseUrl = "https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1";
export const contactsApiUrl = "/contacts";

export const getAllContacts = async (): Promise<IContact[]> => {
  const response = await fetch(`${baseUrl}${contactsApiUrl}`);
  return response.json();
};

export const updateContact = async (contact: IContact): Promise<IContact> => {
  const response = await fetch(`${baseUrl}${contactsApiUrl}/${contact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return response.json();
};

export const deleteContact = async (contactId: string): Promise<IContact> => {
  const response = await fetch(`${baseUrl}${contactsApiUrl}/${contactId}`, {
    method: "DELETE",
  });
  return response.json();
};
