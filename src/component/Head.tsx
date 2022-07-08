import React, { ReactNode } from "react";
import "./head.scss";

type Prop = {
    children: ReactNode
}

const Head: React.FC<Prop> = ({ children }: Prop) => (
  <div className="head">
    {children}
  </div>
);

export default Head;
