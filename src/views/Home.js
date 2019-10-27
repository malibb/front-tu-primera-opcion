import React from "react";
import Layout from '../common/Layout';
import Feed from "../components/Feed";

function Home() {
  return (
    < Layout head = "Tu primera opción!"
    subhead = "Porque necesitas a alguien que valga la pena." >
        <Feed/>
    </Layout>
  );
}


export default Home;