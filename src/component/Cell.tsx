import React, { ReactNode } from "react";
import "./cell.scss";

type Prop = {
    children: ReactNode
}

const Cell: React.FC<Prop> = ({ children }: Prop) => (
  <div className="cell">
    {children}
  </div>
);

export default Cell;
