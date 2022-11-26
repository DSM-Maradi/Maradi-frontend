import { atom } from "recoil";

export const information = atom({
  key: "information",
  default: {
    title: "",
    content: "",
    image_url: "",
    image_description: "",
  },
});
