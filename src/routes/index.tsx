import * as React from "react";

import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import { Home } from "../views/pages/Home"
import { Post } from "../views/pages/Post"

export const Routing: React.FC<{}> = () => {
    return (
        <div className="content">
            <BrowserRouter>
                <Route path='/' exact render={() => <Home />} />
                <Route path='/post/:id' render={() => <Post />} />
            </BrowserRouter>
        </div>
    )
}