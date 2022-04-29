import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout({ children, pageTitle }: Props) {
  return (
    <>
      <Head>
        <title>NextJS | {pageTitle}</title>
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
}
