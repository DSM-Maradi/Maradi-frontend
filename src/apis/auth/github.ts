import axios from "axios";

export default async function github() {
  const token = localStorage.getItem("code");
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
