import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DateService from "../service/DateService";
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
    <header className="header">
      <div className="header__title">
        Calendar
      </div>
      <div className="header__label">
        {dateLabel}
      </div>
      <div className="header__action">
        <FaChevronLeft
          className="clickable-black"
          size={32}
          title="Prev"
        />
        <FaChevronRight
          className="clickable-black"
          size={32}
          title="Next"
        />
      </div>
    </header>
  );
};

export default Header;
