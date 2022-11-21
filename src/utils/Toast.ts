import { toast } from "react-toastify";

export function customToast(msg: string, type: "success" | "error") {
  switch (type) {
    case "success":
      toast.success(msg, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "error":
      toast.error(msg, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      alert("개발자오류");
      break;
  }
}
