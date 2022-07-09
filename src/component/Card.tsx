import React, { ReactNode } from "react";
import "./card.scss";

type Prop = {
    className: string,
    children: ReactNode
}

const Card: React.FC<Prop> = ({ className, children }: Prop) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

export default Card;
