import React from "react";
import "./body.scss";
import Table from "./Table";
import Timeline from "./Timeline";

type Prop = {
    weekDays: number[]
}

const Body: React.FC<Prop> = ({ weekDays }: Prop) => (
  <div className="body">
    <Timeline />
    <Table weekDays={weekDays} />
  </div>
);

export default Body;
