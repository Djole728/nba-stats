const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Main = require('../components/Main');
const Home = require('../components/Home');
const Stat = require('../components/Stat');
const TeamStat = require('../components/TeamStat');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/stat' component={Stat} />
      <Route path='/teamstat' component={TeamStat} />
    </Route>
  </Router>
);

module.exports = routes;
