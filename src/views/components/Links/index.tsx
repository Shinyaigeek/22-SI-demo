import * as React from "react";
import { Link } from "react-router-dom";
import "./links.scss"

export const Links: React.FC<{}> = () => {
  return (
    <div className="links">
      <div>
        <Link to="/">/</Link>
      </div>
      <div>
        <Link to="/profile">/profile</Link>
      </div>
    </div>
  );
};
