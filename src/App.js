import React from "react";
import Manual from "./Manual";
import StyleGuide from "./StyleGuide";
import Home from "./Home";
import Registry from "./Registry";
import NotFound from "./NotFound";
import Benchmarks from "./Benchmarks";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/benchmarks(.html)?" component={Benchmarks} />
          <Route path="/manual(.html)?" component={Manual} />
          <Route path="/style_guide(.html)?" component={StyleGuide} />
          <Route path="/std/:stdPath" component={Registry} />
          <Route path="/std@:stdVersion/:stdPath" component={Registry} />
          <Route path="/x/:mod@:modVersion/:modPath" component={Registry} />
          <Route path="/x/:mod/:modPath" component={Registry} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
