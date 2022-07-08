import React, { useRef } from "react";
import DateService from "../service/DateService";
import Head from "./Head";
import Row from "./Row";
import "./table.scss";

type Prop = {
    weekDays: number[]
}

const Table: React.FC<Prop> = ({ weekDays }: Prop) => {
  const weekdaysShort = useRef(DateService.getWeekdaysShort());

  return (
    <div className="table">
      <Row>
        {weekdaysShort.current.map((day) => <Head>{day}</Head>)}
      </Row>
      <Row>
        {weekDays.map((day) => <Head>{day}</Head>)}
      </Row>
    </div>
  );
};

export default Table;
