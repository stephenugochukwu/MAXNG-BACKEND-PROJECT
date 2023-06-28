import CONFIG from "../config/index.js";
const API_BASE_URL = CONFIG.API_BASE_URL;

const apiCall = async (endpoint: string) => {
  console.log("API call: ", API_BASE_URL + endpoint);
  const response = await fetch(API_BASE_URL + endpoint);
  const data = await response.json();
  return data;
};

export default apiCall;
