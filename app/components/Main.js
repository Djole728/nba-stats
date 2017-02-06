var React = require('react');
var Navigation = require('./Navigation');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
      <Navigation />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
