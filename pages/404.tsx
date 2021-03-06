import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function E404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>NextJS | 404</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1>Error 404</h1>
      </div>
    </>
  );
}
