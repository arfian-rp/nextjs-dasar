import { useRouter } from "next/router";
import React from "react";
import Layout from "../../Components/Layouts";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  dataUser: User;
}
export default function Detail({ dataUser }: Props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle={`User id:${id}`}>
      <h1 className="title">detail {id}</h1>
      <hr />
      <div style={{ textAlign: "center" }}>
        <h3 style={{ marginTop: "1rem" }}>name: {dataUser.name}</h3>
        <h3 style={{ marginTop: "1rem" }}>email: {dataUser.email}</h3>
        <h3 style={{ marginTop: "1rem" }}>phone: {dataUser.phone}</h3>
        <h3 style={{ marginTop: "1rem" }}>website: {dataUser.website}</h3>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUsers = await res.json();
  const paths = dataUsers.map((e: User) => ({
    params: {
      id: `${e.id}`,
    },
  }));
  return {
    paths,
    fallback: true, //kalau false otomatis redirect ke 404 kalau data tidaka ada
    // getStaticProps runs in the background when using fallback: true
    // getStaticProps is called before initial render when using fallback: blocking
  };
}

interface Gsp {
  params: {
    id: number;
  };
}
export async function getStaticProps(context: Gsp) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const dataUser = await res.json();
  console.info("something");
  return {
    props: {
      dataUser,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 2, // In seconds
  };
}
