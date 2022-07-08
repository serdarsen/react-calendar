import range from "lodash/range";
import React, { useEffect, useRef } from "react";
import DateService from "../service/DateService";
import Body from "./Body";
import "./calendar.scss";
import Card from "./Card";
import Header from "./Header";

type Prop = {
}

const Calendar: React.FC<Prop> = () => {
//   const [, setUpdate] = useState(new Date());
//   const update = () => setUpdate(new Date());

  const currentDate = useRef(DateService.getDate());
  const firstDayOfWeek = useRef(DateService.findFirstDayOfWeek());
  const lastDayOfWeek = useRef(DateService.findLastDayOfWeek());
  const weekDays = useRef(range(firstDayOfWeek.current, lastDayOfWeek.current + 1, 1));

  useEffect(() => {
  }, []);

  return (
    <div className="calendar">
      <Card>
        <Header currentDate={currentDate.current} />
        <Body weekDays={weekDays.current} />
      </Card>
    </div>
  );
};

export default Calendar;
