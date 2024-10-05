import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const startGalaxy = async (data: any) => {
  const response = await axios.post(`${API_URL}/start`, data);
  return response.data;
};

export const updateGalaxy = async (data: any) => {
  const response = await axios.post(`${API_URL}/update`, data);
  return response.data;
};

export const stopGalaxy = async () => {
  const response = await axios.post(`${API_URL}/stop`);
  return response.data;
};