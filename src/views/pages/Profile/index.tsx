import * as React from "react";

import Icon from "../../../img/icon.png"

import "./profile.scss"

export const Profile: React.FC<{}> = () => {
    return <div className="profile">
        <div className="name">Shinyaigeek</div>
        <img src={Icon} className="icon" />
    </div>
}