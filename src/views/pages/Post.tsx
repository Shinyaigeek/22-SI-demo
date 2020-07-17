import * as React from "react";

import { blogs } from "../../../routing/items"
import { getRoute } from "../../scripts/getRoute";

const Post:React.FC<{}> =() => {
    return <div className="post">{blogs[getRoute(location.href) as "bar" | "hoge"]}</div>
}

export default Post