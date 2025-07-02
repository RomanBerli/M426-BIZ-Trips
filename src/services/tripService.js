import axios from 'axios';

const API_URL = 'http://localhost:3001/trips';

export const getTrips = () => {
    return axios.get(API_URL);
};

export const deleteTrip = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};