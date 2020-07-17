import * as React from "react";

import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import { Links } from "../views/components/Links";
import { Loading } from "../views/components/Loading";

const Home = React.lazy(() => import("../views/pages/Home"));
const Post = React.lazy(() => import("../views/pages/Post"));
const Profile = React.lazy(() => import("../views/pages/Profile"));

export const Routing: React.FC<{}> = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Links />
        <React.Suspense fallback={<Loading />}>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/post/:id" render={() => <Post />} />
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};
