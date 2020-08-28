import React from "react";
import MyHead from "../src/components/homepage/MyHead";
import Licensing from "../src/components/homepage/Licensing";
import MyAppBar from '../src/components/homepage/Appbar';
import api from "../src/api";
import { Resume } from "../interfaces/resume";

interface Props {
  resume: Resume;
}

function Home({ resume }: Props) {
  console.log("---resume---", resume);
  return (
    <div className="home">
      <MyHead />
      <MyAppBar/>
      <Licensing />
    </div>
  );
}

export async function getStaticProps() {
  const res: any = await api.resume.get("zh-Hans");
  if (res.status === 200) {
    const resume: Resume = res.result;
    return {
      props: { resume },
    };
  }
}

export default Home;
