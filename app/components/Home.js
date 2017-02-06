var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var getDailyLeaders = require('../helpers/api').getDailyLeaders;
const nba = require('nba');
//const teamInfo = require("teamInfo");

var Home = React.createClass({
  componentDidMount: function () {
     getDailyLeaders();
  },
  render: function() {
    return (
    <div className="jumbotron col-sm-12 text-center">
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )}
})

module.exports = Home;
