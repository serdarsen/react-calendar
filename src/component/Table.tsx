import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import DateService from "../service/DateService";
import Cell from "./Cell";
import Head from "./Head";
import Row from "./Row";
import "./table.scss";

type Prop = {
    selectedDate: moment.Moment,
    currentDate: moment.Moment,
    onChangeRequestSelectedDate: Function
}

const Table: React.FC<Prop> = ({
  selectedDate,
  currentDate,
  onChangeRequestSelectedDate,
}: Prop) => {
  const weekdaysShort = useMemo(() => DateService.findWeekdaysShort(), []);

  const [weekDays, setWeekDays] = useState([]);

  const onClickHead = (dayOfMonth: number) => {
    onChangeRequestSelectedDate(dayOfMonth);
  };

  useEffect(() => {
    const weekDays = DateService.findWeekdays(currentDate);
    setWeekDays(weekDays);
  }, [currentDate]);

  return (
    <div className="table">
      <Row>
        {weekDays.map((day, index) => (
          <Head
            currentDay={day}
            selectedDay={selectedDate.date()}
            label={weekdaysShort[index]}
            value={day}
            onClick={onClickHead}
          />
        ))}
      </Row>
      <Row>
        {weekDays.map(() => <Cell />)}
      </Row>
    </div>
  );
};

export default Table;
