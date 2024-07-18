import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  return jwtDecode(token);
};

export { decodeToken };
