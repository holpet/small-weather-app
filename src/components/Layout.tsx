import { PropsWithChildren } from "react";
import Head from "next/head";
import styles from "../../public/css/Layout.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Simple Weather App</title>
        <meta
          name="keywords"
          content="weather, forecast, temperature, learning"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </>
  );
}
