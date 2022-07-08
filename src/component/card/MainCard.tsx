import React from "react";
import Card from "../common/Card";
import Header from "./Header";
import "./mainCard.scss";

type Prop = {
}

const MainCard: React.FC<Prop> = () => (
  <div className="app__maincard">
    <Card>
      <Header />
    </Card>
  </div>
);

export default MainCard;
