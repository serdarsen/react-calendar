import React, { useState } from "react";
import DateService from "../service/DateService";
import "./calendar.scss";
import Card from "./Card";
import Header from "./Header";
import Table from "./Table";

type Prop = {
}

const Calendar: React.FC<Prop> = () => {
  const [selectedDate, setSelectedDate] = useState(DateService.getDate());
  const [currentDate, setCurrentDate] = useState(DateService.getDate());

  const onChangeRequestSelectedDate = (dayOfMonth: number) => {
    const selectedDate = currentDate.clone().date(dayOfMonth);
    setSelectedDate(selectedDate);
  };

  const onChangeRequestCurrentDate = (days: number) => {
    const updatedDate = DateService.addDays(currentDate, days);
    setCurrentDate(updatedDate);
  };

  return (
    <div className="calendar">
      <Card className="calendar__card">
        <Header
          selectedDate={selectedDate}
          currentDate={currentDate}
          onChangeRequestCurrentDate={onChangeRequestCurrentDate}
        />
        <Table
          selectedDate={selectedDate}
          currentDate={currentDate}
          onChangeRequestSelectedDate={onChangeRequestSelectedDate}
        />
      </Card>
    </div>
  );
};

export default Calendar;
