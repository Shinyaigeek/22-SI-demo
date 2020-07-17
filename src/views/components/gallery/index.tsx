import * as React from "react";

import Aimg from "../../../img/a.jpg";
import Bimg from "../../../img/b.jpg";
import Cimg from "../../../img/c.jpg";

import "./gallery.scss";

export const Gallery = () => {
  return (
    <React.Fragment>
      <div className="title">ギャラリー(フリー素材です)</div>
      <div className="gallery">
        <img src={Aimg} />
        <img src={Bimg} />
        <img src={Cimg} />
      </div>
    </React.Fragment>
  );
};
