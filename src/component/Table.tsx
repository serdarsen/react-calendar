import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import DateService from "../service/DateService";
import "./table.scss";

type Prop = {
    today: moment.Moment,
    selectedDate: moment.Moment,
    currentDate: moment.Moment,
    onChangeRequestSelectedDate: Function
}

const Table: React.FC<Prop> = ({
  today,
  selectedDate,
  currentDate,
  onChangeRequestSelectedDate,
}: Prop) => {
  const weekdaysShort = useMemo(() => DateService.findWeekdaysShort(), []);

  const [monthDays, setMonthDays] = useState([]);

  const onClickCell = (dayOfMonth: number) => {
    if (!dayOfMonth) {
      return;
    }

    onChangeRequestSelectedDate(dayOfMonth);
  };

  const createTableCellClassName = (dayOfMonth: number) => {
    let className = "table__cell";

    if (dayOfMonth === selectedDate.date()
               && selectedDate.month() === currentDate.month()
               && selectedDate.year() === currentDate.year()) {
      className = "table__cell table__cell-selected";
    } else if (dayOfMonth === currentDate.date()
        && currentDate.month() === today.month()
        && currentDate.year() === today.year()) {
      className = "table__cell table__cell-active";
    }

    return className;
  };

  useEffect(() => {
    const monthDays = DateService.findMonthdays(currentDate);
    setMonthDays(monthDays);
  }, [currentDate]);

  return (
    <div className="table">
      {weekdaysShort.map((day, index) => (
        <div
          key={`${day}${index}`}
          className="table__head"
        >
          {day}
        </div>
      ))}
      {monthDays.map((day, index) => (
        <div
          key={`${day}${index}`}
          className={createTableCellClassName(day)}
          onClick={() => onClickCell(day)}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default Table;
