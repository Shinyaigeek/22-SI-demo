import * as React from "react";

import Aimg from "../../../img/a.jpg";
import Bimg from "../../../img/b.jpg";
import Cimg from "../../../img/c.jpg";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./gallery.scss";

export const Gallery = () => {
  return (
    <React.Fragment>
      <div className="title">ギャラリー(フリー素材です)</div>
      <div className="gallery">

        <LazyLoadImage
          alt="A"
          src={Aimg}
          effect="blur"
          wrapperClassName="img"
        />
        <LazyLoadImage
          alt="B"
          src={Bimg}
          effect="blur"
          wrapperClassName="img"
        />
        <LazyLoadImage
          alt="C"
          src={Cimg}
          effect="blur"
          wrapperClassName="img"
        />
      </div>
    </React.Fragment>
  );
};
