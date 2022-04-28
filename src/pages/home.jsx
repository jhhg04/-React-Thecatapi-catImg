import React from "react";
import Header from "../components/header";
import Starter from "../components/starter";
import Footer from "../components/footer";
import GithubLogo from "../components/github-logo";

export default () => {
  return (
    <>
    <div className="App">
      <Header />
      <Starter />
      <Footer />
    </div>
    <GithubLogo />
    </>
  );
};
