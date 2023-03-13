import axios from "axios";

interface IVenue {
  venue_name: string;
  venue_street: string;
  venue_city: string;
  venue_country: string;
  venue_state: string;
  venue_postal_code: string;
  capacity: number;
}

export const getVenues = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/venues")
      .then(
        ({ data }) => {
          resolve(data);
        },
        (err) => reject(err)
      )
      .catch((err) => reject(err));
  });
};

export const getVenue = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/venues/${id}`)
      .then(
        ({ data }) => {
          resolve(data);
        },
        (err) => reject(err)
      )
      .catch((err) => reject(err));
  });
};

export const createVenue = (body: IVenue) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/venues", body)
      .then(
        ({ data }) => {
          resolve(data);
        },
        (err) => reject(err)
      )
      .catch((err) => reject(err));
  });
};
