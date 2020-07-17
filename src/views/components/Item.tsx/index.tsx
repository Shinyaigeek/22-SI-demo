import * as React from "react";
import "./item.scss"
import { Link } from "react-router-dom";

interface Props {
    title: string
}

export const Item :React.FC<Props> = (props) => {
    return (
        <div className="item">
            <Link to={`/post/${props.title}`}>
                {props.title}
            </Link>
        </div>
    )
}