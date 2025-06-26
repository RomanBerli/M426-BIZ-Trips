import axios from 'axios';

const API_URL = 'http://localhost:3002/trips';

export const getTrips = () => {
    return axios.get(API_URL);
};


