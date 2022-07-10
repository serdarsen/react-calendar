import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DateService from "../service/DateService";
import StorageService from "../service/StorageService";
import "./header.scss";

type Prop = {
    selectedDate: moment.Moment,
    currentDate: moment.Moment,
    onChangeRequestCurrentDate: Function
}

const Header: React.FC<Prop> = ({
  selectedDate,
  currentDate,
  onChangeRequestCurrentDate,
}: Prop) => {
  const formatType = useRef(0);
  const [dateLabel, setDateLabel] = useState("");

  const changeFormatType = () => {
    formatType.current = DateService.findNextFormatTypeIndex(formatType.current);
    StorageService.saveFormatType(formatType.current);
  };

  const findFormatType = () => {
    formatType.current = StorageService.findFormatType();
  };

  const updateDateLabel = () => {
    const dateLabel = DateService.format(selectedDate ?? currentDate, formatType.current);
    setDateLabel(dateLabel);
  };

  const onClickLabel = () => {
    changeFormatType();
    updateDateLabel();
  };

  const onClickPrev = () => {
    onChangeRequestCurrentDate(-1);
  };

  const onClickNext = () => {
    onChangeRequestCurrentDate(1);
  };

  useEffect(() => {
    findFormatType();
    updateDateLabel();
  }, [selectedDate, currentDate]);

  return (
    <header className="header">
      <div className="header__title">
        Calendar
      </div>
      <div
        className="header__label clickable-black"
        onClick={onClickLabel}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        {dateLabel}
      </div>
      <div className="header__action">
        <FaChevronLeft
          className="clickable-black"
          size={30}
          title="Prev"
          onClick={onClickPrev}
        />
        <FaChevronRight
          className="clickable-black"
          size={30}
          title="Next"
          onClick={onClickNext}
        />
      </div>
    </header>
  );
};

export default Header;
