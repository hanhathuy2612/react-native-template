import axios from "axios";
import { Alert } from "react-native";

const ROOT_API_PATH = "";

const httpClient = axios.create({
  baseURL: ROOT_API_PATH,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json"
    // Add other default headers if needed
  }
});

// Add a request interceptor to add the token to the headers
httpClient.interceptors.request.use(async (config) => {
  console.log("Request: ", config.url)
  return config;
});

// Response interceptor to handle alerts based on HTTP status codes
httpClient.interceptors.response.use(
  (response) => {
    // Return the response data if successful
    return response;
  },
  (error) => {
    // Handle errors and show alerts based on HTTP status codes
    if (error.response) {
      const status = error.response.status;
      let message = "An error occurred";

      if (status === 401) {
        message = "Unauthorized";
      } else if (status === 404) {
        message = "Resource not found";
      }else if (status === 400) {
        message = error.response.data.message;
      } else if (status >= 500) {
        message = error.response;
      }
      console.error("Error at: ", error.response.config.url, " with message: ", error.response.data)
      Alert.alert("Error", message);
    }

    return Promise.reject(error);
  }
);

export default httpClient;
