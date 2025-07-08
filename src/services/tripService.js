import axios from 'axios';

const API_URL = 'http://localhost:3001/trips';

export const getTrips = () => {
    return axios.get(API_URL);
};

export const deleteTrip = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateTrip = async (id, updatedData) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Failed to update trip:", error)
        throw error;
    }
}