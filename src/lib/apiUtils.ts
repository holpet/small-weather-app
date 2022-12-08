import axios from "axios";
import { API_URL } from "./constants";

const fetchWeatherData = async (city: String) => {
  const userInput = { city: city };
  const currentApiUrl = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : API_URL;

  try {
    const { data } = await axios.post(`${currentApiUrl}api/apiData`, userInput);
    const resData = { ...data, status: 200 };
    return resData;
  } catch (error) {
    const resData = { status: 404 };
    return resData;
  }
};

export { fetchWeatherData };
