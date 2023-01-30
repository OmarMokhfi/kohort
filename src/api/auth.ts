import axios from "axios";

type RegistrationData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  provider: string;
};

export const createNewAccount = (credentials: RegistrationData) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/register", credentials)
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => reject(err.response.data)
      )
      .catch((err) => reject(err.response.data));
  });
};
