import Layout from "@/components/Layout/Layout";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useRef } from "react";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickOutsideOfInput = () => {
    inputRef?.current?.focus();
  };

  return (
    <Layout onClick={onClickOutsideOfInput}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>Mori Shell Terminal</title>
      </Head>
      <Component {...pageProps} inputRef={inputRef} />
    </Layout>
  );
};

export default MyApp;
