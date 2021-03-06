import { useRouter } from "next/router";
import React from "react";
import Layout from "../../Components/Layouts";
import styles from "./Users.module.css";

interface Props {
  dataUsers: [];
}
export default function Index({ dataUsers }: Props) {
  const router = useRouter();
  return (
    <Layout pageTitle="Users">
      <h1 className="title">users</h1>
      <hr />
      {dataUsers.map((e: any) => {
        return (
          <div onClick={() => router.push(`/users/${e.id}`)} className={styles.item} key={e.id}>
            <span>{e.name}</span>
            <br />
            <span>{e.email}</span>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
