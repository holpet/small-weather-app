import React from "react";
import styles from "../../public/css/Container.module.scss";

interface Props {
  onLoading: Boolean;
}

export default function Loader({ onLoading }: Props) {
  if (onLoading) {
    return (
      <img
        src="/img/loader2.gif"
        width="180"
        height="auto"
        className={styles.loader}
      />
    );
  } else return <></>;
}
