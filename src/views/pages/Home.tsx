import * as React from "react";
import { blogs } from "../../../routing/items";
import { Item } from "../components/Item.tsx";

export const Home:React.FC<{}> = () => {
return <div>{Object.keys(blogs).map(key => {
    return <Item title={key} />
})}</div>
}