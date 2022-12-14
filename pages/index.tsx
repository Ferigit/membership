import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "../src/store/store";
import { getUserState } from "../src/store/slices/userSlice";
import Layout from "../src/components/Layout";
import { RouteGuard, StatusBar, Table, Button } from "../src/components";
import useHomeStyleStyle from "./useHomeStyle.style";
import { ArrowBack } from "@mui/icons-material";
import { apiInstance } from "../src/ApiInstance";

const Home: NextPage = ({ posts = [] }: any) => {
  const dispatch = useDispatch();
  const classes = useHomeStyleStyle();
  const columns = [
    { field: "id", headerName: "id" },
    { field: "name", headerName: "name" },
    { field: "year", headerName: "year" },
    { field: "pantone_value", headerName: "Pantone value" },
    { field: "color", headerName: "Color" },
    {
      field: "detail",
      headerName: "Detail",
      width: 130,
      renderCell: (params: any) => {
        return (
          <div>
            <Button label="View Detail" className={classes.viewDetal} />
          </div>
        );
      },
    },
  ];

  return (
    <RouteGuard>
      <Layout>
        <Head>
          <title>Membership App</title>
          <meta
            name="description"
            content="Generated by create membership app"
          />
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
            <div className={classes.postsTable}>
              <Table data={posts} columns={columns} />;
            </div>
          </div>
        </div>
      </Layout>
    </RouteGuard>
  );
};

export async function getServerSideProps() {
  const res: any = await apiInstance("Get", "api/unknown", {});
  return { props: { posts: res.data } };
}
export default Home;
