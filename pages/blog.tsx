import React from "react";
import Layout from "../Components/Layouts";
import styles from "../styles/Blog.module.css";

export default function blog() {
  return (
    <Layout pageTitle="Blog">
      <h1 className={styles["title-blog"]}>blog</h1>
    </Layout>
  );
}
