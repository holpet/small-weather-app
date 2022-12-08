import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const url = constructQuery(req.body.city);
  try {
    const { data } = await axios.get(url);
    const weatherIcon =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    const dataObj = {
      temp: data.main.temp,
      icon: weatherIcon,
    };
    res.status(200).json(dataObj);
  } catch (error) {
    res.status(404).json({});
  }
}

/* ~~~~ Helper functions ~~~ */

function constructQuery(city: String) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=" +
    process.env.NEXT_PUBLIC_API_KEY +
    "&q=" +
    city +
    "&units=metric";
  return url;
}
