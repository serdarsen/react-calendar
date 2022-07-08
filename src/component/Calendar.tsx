import React from "react";
import "./calendar.scss";
import Card from "./Card";
import Header from "./Header";

type Prop = {
}

const Calendar: React.FC<Prop> = () => (
  <div className="calendar">
    <Card>
      <Header />
    </Card>
  </div>
);

export default Calendar;
