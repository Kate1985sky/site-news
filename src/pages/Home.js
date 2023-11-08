import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useFetch } from "../hooks/useFetch";
import { ContentBox } from "../components/ContentBox/ContentBox";
import { Load } from "../components/Load/Load";

export const Home = () => {
  const { data: news } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (news === null) {
    return <Load />;
  }

  return (
    <Fragment>
      <ContentBox>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {news.map((item) => (
              <li className={styles.listNews} key={item.id}>
                <Link className={styles.items}
                  to={`/${item.id}`}
                >
                  {" "}
                  <h1 className={styles.titleNews}>{item.title}</h1>
                  <p className={styles.body}>{item.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ContentBox>
    </Fragment>
  );
};
