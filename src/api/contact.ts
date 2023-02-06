import axios from "axios";

export const sendAccountVerificationEmail = (
  name: string,
  email: string,
  token: any
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          to: [
            {
              email: email,
              name: name,
            },
          ],
          templateId: 1,
          params: {
            NAME: name,
            LINK: `http://localhost:3000/verify-account/${token}`,
          },
        },
        {
          headers: {
            "content-type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
        }
      )
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => reject(err.response.data)
      )
      .catch((err) => reject(err.response.data));
  });
};

export const sendWelcomeEmail = (
  name: string,
  email: string,
  password: string
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          to: [
            {
              email: email,
              name: name,
            },
          ],
          templateId: 2,
          params: {
            NAME: name,
            EMAIL: email,
            PASSWORD: password,
          },
        },
        {
          headers: {
            "content-type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
        }
      )
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => reject(err.response.data)
      )
      .catch((err) => reject(err.response.data));
  });
};
