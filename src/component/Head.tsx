import React from "react";
import "./head.scss";

type Prop = {
    currentDay: number,
    selectedDay: number,
    label: string,
    value: number,
    onClick: Function
}

const Head: React.FC<Prop> = ({
  currentDay, selectedDay, label, value, onClick,
}: Prop) => {
  const isSelected = () => currentDay === selectedDay;

  return (
    <div
      className={`head ${isSelected() ? "head-selected" : ""}`}
      onClick={() => onClick(value)}
      role="button"
      onKeyDown={() => {}}
      tabIndex={0}
    >
      <div className="head__label">{label}</div>
      <div className="head__value">{value}</div>
    </div>
  );
};

export default Head;
