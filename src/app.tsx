import * as React from "react";
import { render } from "react-dom";
import { Home } from "./views/pages/Home";
import { Routing } from "./routes";

const App = () => {
    return (
        <Routing />
    )
}

render(<App />, document.getElementById("_app"));