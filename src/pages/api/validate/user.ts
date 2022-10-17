import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<any>
) => {
        const { Email, Cpf, Phone } = request.query
        let url = null;
        console.log('front api get request')

        if (Email) {
            url = `${process.env.API_URL_BASE}/user/get-by-email/${Email}`;
        } else if (Cpf) {
            url = `${process.env.API_URL_BASE}/user/get-by-cpf/${Cpf}`;
        } else if (Phone) {
            url = `${process.env.API_URL_BASE}/user/get-by-phone/${Phone}`;
        }

        if (!url) {
            return response.status(500).send('{"message":"error"}')
        }

        const isValid = !((await axios.get(url)).data).data;

        return response.send(JSON.stringify({ isValid }));
}

export default handler;