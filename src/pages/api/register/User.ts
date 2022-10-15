import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { encrypt } from "../../../util/Bcrypt";

type formData = {
    FirstName: string,
    LastName: string,
    Email: string,
    Gender: string,
    Phone: string,
    Cpf: string,
    Password: string,
    ConfirmPassword: string
}

type Payload = {
    FirstName: string,
    LastName: string,
    Email: string,
    Gender: string,
    Phone: string,
    Cpf: string,
    Password: string,
}

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<any>
) => {
    const url = `${process.env.URL_BASE}/user/create-user`;

    const { Password, ConfirmPassword } = request.body as formData;

    if (Password != ConfirmPassword) {
        response.statusCode = 400;
        response.statusMessage = 'Bad Request';
        
        return response.send({ error: true,  message: "Password doesn't match"}) 
    } else {
        const { ConfirmPassword, ...payload } = request.body as formData;

        payload.Password = encrypt(payload.Password);

        const result: AxiosResponse = await axios.post(url, payload);
        return response.send(result.data)
    }

    // if (isValidEmail) TODO 
    // if (isValidPhone) TODO

    // response.statusCode = 200;
    // return response.send(JSON.stringify(request.body));
}

export default handler;