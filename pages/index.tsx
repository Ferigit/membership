import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "../src/store/store";
import { getUserState, setEmail, setName } from "../src/store/slices/userSlice";
import Layout from "../src/components/Layout";
import { RouteGuard, StatusBar, Table } from "../src/components";
import useHomeStyleStyle from "./useHomeStyle.style";
import { ArrowBack } from "@mui/icons-material";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const classes = useHomeStyleStyle();
  const { name, email } = useSelector(getUserState);
  console.log("name, email: ", name, email);
  const [posts, setPosts] = useState([]);
  const columns = [
    { field: "id", headerName: "id" },
    { field: "idea", headerName: "نام ایده " },
    { field: "author", headerName: "نام ایده دهنده " },
    { field: "status", headerName: "وضعیت" },
    { field: "ideaDate", headerName: "تاریخ ثبت ایده" },
    {
      field: "rating",
      headerName: "امتیاز",
      width: 130,
      renderCell: (params) => {
        return (
          <div className={classes.ratingCellRender}>
            <Rating initialRating={3} />
          </div>
        );
      },
    },
  ];

  return (
    <RouteGuard>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.root}>
          <StatusBar />
          <div className={classes.body}>
            <p className={classes.postsTitle}>Posts</p>
            <p className={classes.postsTitleCaption}>
              <ArrowBack />
              Back to search results
            </p>
            <Table data={posts} columns={columns} />
          </div>
        </div>
      </Layout>
    </RouteGuard>
  );
};

export default Home;
