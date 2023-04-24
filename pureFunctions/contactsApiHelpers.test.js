import {
  baseUrl,
  contactsApiUrl,
  getAllContacts,
  updateContact,
  deleteContact,
} from "./contactsApiHelpers";

const responseJsonMock = jest.fn();
global.fetch = jest.fn().mockResolvedValue({ json: responseJsonMock });

describe("ContactsApiHelpers", () => {
  describe("GetAllContacts", () => {
    let result;
    const returnedJson = "Jason";
    beforeAll(async () => {
      responseJsonMock.mockResolvedValue(returnedJson);
      result = await getAllContacts();
    });
    it("should call fetch with the correct params", () => {
      expect(global.fetch).toBeCalledWith(`${baseUrl}${contactsApiUrl}`);
    });
    it("should read the response tream into json", () => {
      expect(responseJsonMock).toBeCalled();
    });
    it("should return the json from the stream if successful", () => {
      expect(result).toEqual(returnedJson);
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
  });
  describe("UpdateContact", () => {
    let result;
    const returnedJson = "Jason";
    const id = "id";
    beforeAll(async () => {
      responseJsonMock.mockResolvedValue(returnedJson);
      result = await updateContact({ id });
    });
    it("should call fetch with the correct params", () => {
      expect(global.fetch).toBeCalledWith(`${baseUrl}${contactsApiUrl}/${id}`, {
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      });
    });
    it("should read the response tream into json", () => {
      expect(responseJsonMock).toBeCalled();
    });
    it("should return the json from the stream if successful", () => {
      expect(result).toEqual(returnedJson);
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
  });
  describe("DeleteContact", () => {
    let result;
    const returnedJson = "Jason";
    const id = "id";
    beforeAll(async () => {
      responseJsonMock.mockResolvedValue(returnedJson);
      result = await deleteContact(id);
    });
    it("should call fetch with the correct params", () => {
      expect(global.fetch).toBeCalledWith(`${baseUrl}${contactsApiUrl}/${id}`, {
        method: "DELETE",
      });
    });
    it("should read the response tream into json", () => {
      expect(responseJsonMock).toBeCalled();
    });
    it("should return the json from the stream if successful", () => {
      expect(result).toEqual(returnedJson);
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
  });
});
