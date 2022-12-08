import axios from "axios";

const fetchWeatherData = async (city: String) => {
  const userInput = { city: city };
  if (process.env.NEXT_PUBLIC_API_URL) {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/apiData`,
        userInput
      );
      const resData = { ...data, status: 200 };
      return resData;
    } catch (error) {
      const resData = { status: 404 };
      return resData;
    }
  }
};

export { fetchWeatherData };
