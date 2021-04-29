import { Route, Switch,BrowserRouter as Router } from "react-router-dom"
import {App1,App2,App3,App4,App5,App6} from "./pageurl"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
    <Route exact path="/" component={App1} />
    <Route path="/app2" component={App2} />
    <Route path="/app3" component={App3} />
    <Route path="/app4" component={App4} />
    <Route path="/app5" component={App5} />
    <Route path="/app6" component={App6} />
    {/* topMenu route */}
    {/* <Route component={NotFound} /> */}
  </Switch>
      </Router>
    </div>
  );
}

export default App;
