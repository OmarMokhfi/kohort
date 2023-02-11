import axios from "axios";

export const getGroups = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/api/groups")
      .then(
        ({ data }) => {
          resolve(data.data.groups);
        },
        (err) => reject(err)
      )
      .catch((err) => reject(err));
  });
};
