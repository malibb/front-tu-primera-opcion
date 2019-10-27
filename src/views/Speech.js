import React from "react";
import Layout from '../common/Layout';
import MyFrame from "../components/MyFrame";

function Home() {
  return (
    < Layout head = "Tu primera opción!"
    subhead = "Porque necesitas a alguien que valga la pena." >
         <MyFrame src="https://malibb.github.io/textSpeech/" height="700" width="1300"/>
    </Layout>
  );
}


export default Home;