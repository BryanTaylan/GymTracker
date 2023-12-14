import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://192.168.1.249:9000/api",
});

export default apiClient;
