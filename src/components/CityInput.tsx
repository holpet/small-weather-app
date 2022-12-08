import React, { useState } from "react";
import styles from "../../public/css/Container.module.scss";
import Form from "./Form";
import Alert from "./Alert";
import Loader from "./Loader";
import WeatherVals from "./WeatherVals";

export default function CityInput() {
  const [data, setData] = useState({ temp: "", icon: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={styles.cityContainer}>
        <Form
          handleIsVisible={setIsVisible}
          handleNotFound={setNotFound}
          handleLoading={setIsLoading}
          handleData={setData}
        />
        <Alert onNotFound={notFound} />
      </div>
      <Loader onLoading={isLoading} />
      <WeatherVals onIsVisible={isVisible} temp={data.temp} icon={data.icon} />
    </>
  );
}
