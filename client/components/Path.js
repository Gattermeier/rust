var React = require('react');

// A Comment component that can be applied to a user profile feed,
// a url feed, or any other comment list.
// Comment data will be passed down in this.props.comment.
//
// TODO:
// - Show a delete link if this comment belongs to the logged in user?
//   How does the comment get deleted from the feed?
// - Show # Hearts?
//
var Path = React.createClass({
  propTypes: {
    path: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return (
      <div>
        <p><strong>{this.props.path.url}</strong> Comments: {this.props.commentCount} </p>
      </div>
    );
  }
});

module.exports = Path;