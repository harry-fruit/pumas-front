import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { encrypt } from "../../../util/Bcrypt";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

type formData = {
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Phone: string;
  Cpf: string;
  Password: string;
  ConfirmPassword: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  const body = JSON.parse(request.body);
  const { Password, ConfirmPassword } = body as formData;

  const createUserUrl = `${process.env.API_URL_BASE}/user/create-user`;
  if (Password != ConfirmPassword) {
    response.statusCode = StatusCodes.BAD_REQUEST;
    response.statusMessage = ReasonPhrases.BAD_REQUEST;

    return response.send({ error: true, message: "Password doesn't match" });
  } else {
    const { ConfirmPassword, ...payload } = body as formData;
    payload.Password = encrypt(payload.Password);
    const result: AxiosResponse = await axios.post(createUserUrl, payload);

    if (result.data.error) {
      throw new Error('Erro ao criar usuario')
    } else {
      response.statusCode = StatusCodes.CREATED;
      response.statusMessage = ReasonPhrases.CREATED;
      
      return response.send({ error: true, message: "User Created" });
    }
  }
};

export default handler;