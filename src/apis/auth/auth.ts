import instance from "../axios";

export default function auth(
  access_token: string | null
  //   refresh_token: string | null
) {
  const response = instance.post("/auth/oauth");
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    // localStorage.setItem("refresh_token", refresh_token);
  }
  return response;
}
