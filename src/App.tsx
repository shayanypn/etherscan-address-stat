import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Stat from './containers/Stat';
import NotFound from './containers/NotFound';

const App: React.FC = () => {

    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Ethereum address stat</h1>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/stat/:address/:network">
                                <Stat />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
