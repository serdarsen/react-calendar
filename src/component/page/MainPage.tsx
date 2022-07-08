import React from "react";
import MainCard from "../card/MainCard";
import "./mainPage.scss";

type Prop = {
}

const MainPage: React.FC<Prop> = () => (
  <div className="app__mainpage">
    <MainCard />
  </div>
);

export default MainPage;
