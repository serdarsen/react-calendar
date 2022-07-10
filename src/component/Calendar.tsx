import React, { useMemo, useState } from "react";
import DateService from "../service/DateService";
import "./calendar.scss";
import Card from "./Card";
import Header from "./Header";
import Table from "./Table";

type Prop = {
}

const Calendar: React.FC<Prop> = () => {
  const [selectedDate, setSelectedDate] = useState(DateService.getToday());
  const [currentDate, setCurrentDate] = useState(DateService.getToday());
  const today = useMemo(() => DateService.getToday(), [currentDate]);

  const onChangeRequestSelectedDate = (dayOfMonth: number) => {
    let date = currentDate.clone().date(dayOfMonth);

    if (dayOfMonth === selectedDate.date()
        && selectedDate.month() === date.month()
        && selectedDate.year() === date.year()) {
      date = today.clone();
    }

    setSelectedDate(date);
  };

  const onChangeRequestCurrentDate = (months: number) => {
    const date = DateService.addMonths(currentDate, months);
    setCurrentDate(date);
  };

  return (
    <div className="calendar">
      <Card>
        <Header
          selectedDate={selectedDate}
          currentDate={currentDate}
          onChangeRequestCurrentDate={onChangeRequestCurrentDate}
        />
        <Table
          today={today}
          selectedDate={selectedDate}
          currentDate={currentDate}
          onChangeRequestSelectedDate={onChangeRequestSelectedDate}
        />
      </Card>
    </div>
  );
};

export default Calendar;
