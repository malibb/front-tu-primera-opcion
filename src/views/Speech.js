import React from "react";
import Layout from '../common/Layout';
import MyFrame from "../components/MyFrame";

function Home() {
  return (
    < Layout head = "Tu primera opción!"
    subhead = "Porque necesitas a alguien que valga la pena." >
         <MyFrame src="https://www.google.com/intl/en/chrome/demos/speech.html" height="700" width="1500"/>
    </Layout>
  );
}


export default Home;