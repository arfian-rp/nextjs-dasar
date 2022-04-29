import { useRouter } from "next/router";
import React from "react";
import Layout from "../../Components/Layouts";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Detile">
      <h1 className="title">detail {id}</h1>
    </Layout>
  );
}
