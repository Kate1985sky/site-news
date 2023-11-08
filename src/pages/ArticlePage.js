import React from "react";
import styles from "./ArticlePage.module.css";
import { ContentBox } from "../components/ContentBox/ContentBox";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Load } from "../components/Load/Load";

export const ArticlePage = () => {
  const params = useParams();
  const postUrl = "https://jsonplaceholder.typicode.com/posts/" + params.id;
  const { data: post } = useFetch(postUrl);

  if (post === null) {
    return <Load/>;
  }

  return (
    <ContentBox>
    <div className={styles.body}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.body}</p>
    </div>
    </ContentBox>
  );
};