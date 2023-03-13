import axios from "axios";

export const getGroups = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/groups")
      .then(
        ({ data }) => {
          resolve(data.data.groups);
        },
        (err) => reject(err)
      )
      .catch((err) => reject(err));
  });
};
