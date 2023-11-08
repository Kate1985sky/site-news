import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { useFetch } from "../hooks/useFetch";
import { ContentBox } from "../components/ContentBox/ContentBox";
import { Load } from "../components/Load/Load";


const hover = ({isActive}) => ({color: isActive ? 'var(--white)' : "white"})

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
            <NavLink
              style={hover}
              to={`/${item.id}`}
            > <h1 className={styles.titleNews}>{item.title}</h1>
              <p className={styles.body}>{item.body}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      </div>
      </ContentBox>
    </Fragment>
  );
};