import React, { useEffect, useState } from "react";
import DateService from "../../service/DateService";
import "./header.scss";

type Prop = {
}

const Header: React.FC<Prop> = () => {
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    const date = DateService.getDate();
    setDateLabel(date.format("MMMM gggg"));
  }, []);

  return (
    <header className="app__header">
      <div className="app__header-title">
        Calendar
      </div>
      <div className="app__header-datelabel">
        {dateLabel}
      </div>
      <div className="app__header-action" />
    </header>
  );
};

export default Header;
