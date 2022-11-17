import axios from "axios";

export interface AxiosType {
  client_id: string;
}

export default async function auth(code: string) {
  const response = await axios
    .get(`http://43.201.106.115:8080/auth/login/github?code=${code}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
}
