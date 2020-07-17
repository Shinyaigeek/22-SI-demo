import * as React from "react";
import { render } from "react-dom";
import { Home } from "./views/pages/Home";
import { Routing } from "./routes";
import { Layout } from "./views/Layout";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <React.Fragment>
        <Routing />
      </React.Fragment>
    </Layout>
  );
};

render(<App />, document.getElementById("_app"));
