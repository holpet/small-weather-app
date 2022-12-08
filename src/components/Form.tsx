import React, { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import styles from "../../public/css/Container.module.scss";
import { fetchWeatherData } from "../lib/apiUtils";

interface Props {
  handleIsVisible: Dispatch<SetStateAction<boolean>>;
  handleNotFound: Dispatch<SetStateAction<boolean>>;
  handleLoading: Dispatch<SetStateAction<boolean>>;
  handleData: Dispatch<SetStateAction<{ temp: string; icon: string }>>;
}

export default function Form({
  handleIsVisible,
  handleNotFound,
  handleLoading,
  handleData,
}: Props) {
  const inputVal = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleChange();
    handleLoading(true);
    if (inputVal.current === null) return;
    if (inputVal.current.value.length === 0) return;
    const data = await fetchWeatherData(inputVal.current.value);
    console.log("data", data);

    //console.log("status: ", data.status);

    handleData(data);
    if (data.status !== 200) {
      handleNotFound(true);
      handleIsVisible(false);
    } else {
      handleNotFound(false);
      handleIsVisible(true);
    }
    handleLoading(false);
  }

  function handleChange() {
    handleData({ temp: "", icon: "" });
    handleIsVisible(false);
    handleNotFound(false);
  }

  return (
    <form className="city-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          ref={inputVal}
          onChange={handleChange}
          type="text"
          className={`${styles.cityInputGroup} form-control`}
          name="city"
          placeholder="...this city"
          aria-label="City"
          aria-describedby="city-pick"
          autoComplete="off"
        />
        <button
          type="submit"
          className={`${[styles.cityInputGroup, styles.btnPrimary].join(
            " "
          )} btn btn-primary`}
        >
          Go
        </button>
      </div>
    </form>
  );
}
