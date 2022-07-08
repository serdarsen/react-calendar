import React from "react";
import "./header.scss";

type Prop = {
}

const Header: React.FC<Prop> = () => (
  <header className="app__header">
    <div className="app__header-title">
      Calendar
    </div>
    <div className="app__header-action" />
  </header>
);

export default Header;
