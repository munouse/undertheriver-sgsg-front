import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
import { Main } from "./index";

const Root: React.FC = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </Router>
)


export default Root;