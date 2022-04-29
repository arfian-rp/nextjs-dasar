import React, { ReactNode } from "react";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
