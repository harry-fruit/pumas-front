import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { encrypt } from "../../../util/Bcrypt";
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

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

type Payload = {
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Phone: string;
  Cpf: string;
  Password: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  const { Cpf, Email, Phone, Password, ConfirmPassword } =
    request.body as formData;

  const createUserUrl = `${process.env.URL_BASE}/user/create-user`;

  const verifiedData = await existsData(Cpf, Email, Phone);
  console.log(verifiedData);

  if (Password != ConfirmPassword) {
    response.statusCode = StatusCodes.BAD_REQUEST ;
    response.statusMessage = ReasonPhrases.BAD_REQUEST;

    return response.send({ error: true, message: "Password doesn't match" });
  } else if (!verifiedData.isValid) {
    response.statusCode = StatusCodes.NOT_ACCEPTABLE;
    response.statusMessage = ReasonPhrases.NOT_ACCEPTABLE;

    let existsName:string = '';

    if (verifiedData.existsCpf) existsName = 'Cpf';
    if (verifiedData.existsEmail) existsName = 'Email';
    if (verifiedData.existsPhone) existsName = 'Phone';

    return response.send({ error: true, message: `${existsName} Already Exists` });
  } else {
    const { ConfirmPassword, ...payload } = request.body as formData;

    payload.Password = encrypt(payload.Password);

    const result: AxiosResponse = await axios.post(createUserUrl, payload);
    return response.send(result.data);
  }

};

const existsData = async (Cpf: string, Email: string, Phone: string) => {
  const urls = {
    validateCpfUrl: `${process.env.URL_BASE}/user/get-by-cpf/${Cpf}`,
    validateEmailUrl: `${process.env.URL_BASE}/user/get-by-email/${Email}`,
    validatePhoneUrl: `${process.env.URL_BASE}/user/get-by-phone/${Phone}`,
  };

  const existsCpf = !!((await axios.get(urls.validateCpfUrl)).data).data;
  const existsEmail = !!((await axios.get(urls.validateEmailUrl)).data).data;
  const existsPhone = !!((await axios.get(urls.validatePhoneUrl)).data).data;

  console.log(existsCpf)
  console.log(existsEmail)
  console.log(existsPhone)

  return { 
    existsCpf, 
    existsEmail, 
    existsPhone, 
    isValid: !existsCpf && !existsEmail && !existsPhone
 };
};

export default handler;
