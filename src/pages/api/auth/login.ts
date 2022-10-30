import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
    const payload = JSON.parse(request.body);
    const url = `${process.env.API_URL_BASE}/auth/login`;

    const auth = (await axios.post(url, payload) as any).data;


  return response.status(200).send(auth);
};

export default handler;
