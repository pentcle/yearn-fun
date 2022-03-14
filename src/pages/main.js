import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import logo from "../images/yearnfun.svg";
import {Link} from "react-router-dom";

export const Main = () => {
  return (
    <div>
        <Header>{logo}</Header>
        <Layout>
            <main>
                <article className={"vertical-center-container"}>
                    <p className={"text-large vertical-center"}>
                        hello
                    </p>
                    <Link to={"/time"}>yearn time</Link>
                </article>
            </main>
      </Layout>
    </div>
  );
};
