import * as React from "react";

import { blogs } from "../../../public/items"
import { getRoute } from "../../scripts/getRoute";


export const Post:React.FC<{}> =() => {
    return <div className="post">{blogs[getRoute(location.href) as "bar" | "hoge"]}</div>
}