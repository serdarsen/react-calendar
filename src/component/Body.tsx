import React, { useEffect } from "react";
import DateService from "../service/DateService";
import "./body.scss";

type Prop = {
}

const Body: React.FC<Prop> = () => {
  useEffect(() => {
    console.log("hello from body weekdaysShort:", DateService.getWeekdaysShort());
    console.log("hello from body firstDayOfWeek:", DateService.getFirstDayOfWeek().format("Do MMMM gggg"));
    console.log("hello from body lastDayOfWeek:", DateService.getLastDayOfWeek().format("Do MMMM gggg"));
  });

  return (
    <div className="body">
      Body
    </div>
  );
};

export default Body;
