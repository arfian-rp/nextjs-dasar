import React from "react";
import Layout from "../Components/Layouts";
import styles from "../styles/Posts.module.css";

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface Props {
  dataPosts: [Posts];
}
export default function posts({ dataPosts }: Props) {
  return (
    <Layout pageTitle="Posts">
      <h1 className="title">posts</h1>
      <hr />
      {dataPosts.map((e: Posts) => {
        return (
          <div className={styles.item} key={e.id}>
            <span>{e.title}</span>
            <hr />
            <h4>{e.body}</h4>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataPosts = await res.json();
  return {
    props: {
      dataPosts,
    },
  };
}
