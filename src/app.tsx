import * as React from "react";
import { render } from "react-dom";
import { Home } from "./views/pages/Home";
import { Routing } from "./routes";
import { Layout } from "./views/Layout";

const App = () => {
  return (
    <Layout>
      <Routing />
    </Layout>
  );
};

render(<App />, document.getElementById("_app"));
