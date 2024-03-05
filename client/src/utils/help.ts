import { message } from "antd";

export const showMessage = (
  type: "success" | "error" | "warning",
  msg: string
) => {
  if (type === "success") return message.success(msg);
  if (type === "error") return message.error(msg);
  if (type === "warning") return message.warning(msg);
};

export const obtainToken = localStorage.getItem("accessToken") ?? "";
export const obtainNavigatePath = localStorage.getItem("navigatePath") ?? "";
