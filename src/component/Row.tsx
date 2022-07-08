import React, { ReactNode } from "react";
import "./row.scss";

type Prop = {
    children: ReactNode
}

const Row: React.FC<Prop> = ({ children }: Prop) => (
  <div className="row">
    {children}
  </div>
);

export default Row;
