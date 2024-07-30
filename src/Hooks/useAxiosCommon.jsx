import axios from "axios";

// Correctly access the environment variable
const baseURL = import.meta.env.VITE_API_URL;

// Log the baseURL to check if it is correctly retrieved
console.log(baseURL);

const axiosCommon = axios.create({
    baseURL: baseURL, // Use baseURL directly without curly braces
});

const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;
