import bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10).then(function (hash) {
      resolve(hash);
    });
  });
};

export const comparePassword = (password: string, hashed: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed).then(function (result) {
      resolve(result);
    });
  });
};
