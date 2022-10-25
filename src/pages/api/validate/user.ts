import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  const { Email, Cpf, Phone, Cnpj, SocialReason, ComercialName } =
    request.query;
  let url = "";

  if (Email) {
    url = `${process.env.API_URL_BASE}/user/get-by-email/${Email}`;
  } else if (Cpf) {
    url = `${process.env.API_URL_BASE}/user/get-by-cpf/${Cpf}`;
  } else if (Phone) {
    url = `${process.env.API_URL_BASE}/user/get-by-phone/${Phone}`;
  } else if (Cnpj) {
    url = `${process.env.API_URL_BASE}/user/get-by-cnpj/${Cnpj}`;
  } else if (SocialReason) {
    url = `${process.env.API_URL_BASE}/user/get-by-social-reason/${SocialReason}`;
  } else if (ComercialName) {
    url = `${process.env.API_URL_BASE}/user/get-by-comercial-name/${ComercialName}`;
  }


  if (!url) {
    return response.status(500).send(JSON.stringify({ message: "error" }));
  }

  const isValid = !(await axios.get(url)).data.data;

  console.log(isValid)

  return response.status(200).send(JSON.stringify({ isValid }));
};

export default handler;
