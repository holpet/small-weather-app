import React from "react";
import styles from "../../public/css/Container.module.scss";

interface Props {
  onNotFound: Boolean;
}

export default function Alert({ onNotFound }: Props) {
  if (onNotFound) {
    return (
      <div className={`${styles.alertDanger} alert alert-danger`} role="alert">
        City not found.
      </div>
    );
  } else return <></>;
}
