import instance from "../axios";

export interface AxiosType {
  client_id: string;
}

export default async function auth(code: string) {
  const response = await instance
    .get(`/auth/login/github?code=${code}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
}
