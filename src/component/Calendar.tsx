import React, { useEffect, useState } from "react";
import DateService from "../service/DateService";
import Body from "./Body";
import "./calendar.scss";
import Card from "./Card";
import Header from "./Header";

type Prop = {
}

const Calendar: React.FC<Prop> = () => {
  const [currentDate, setCurrentDate] = useState(DateService.getDate());
  //   const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const today = DateService.getDate();
    console.log("myDebug today: ", today);
    setCurrentDate(today);
  }, []);

  return (
    <div className="calendar">
      <Card>
        <Header currentDate={currentDate} />
        <Body />
      </Card>
    </div>
  );
};

export default Calendar;
