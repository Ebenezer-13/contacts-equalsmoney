import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl = " https://61c32f169cfb8f0017a3e9f4.mockapi.io/";
const contactsApiRoute = "api/v1/contacts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      axios({
        method: "get",
        url: `${baseUrl}${contactsApiRoute}`,
        responseType: "json",
      });
      break;
    case "POST":
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
