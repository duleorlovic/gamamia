//= require moment

var Comment = React.createClass({
  render: function() {
    var comment = this.props.comment

    return (
      <div className="clearfix visible-hover-wrapper" id={comment.anchor}>
        <div className="left mr2">
          <User user={comment.user} />
        </div>
        <div className="overflow-hidden">
          <h5 className="mt0 mb0">
            {comment.user.name}
            <span className="light-gray regular ml1">{comment.user.occupation}</span>
          </h5>
          {comment.content}

          <div className="h6 mt1 light-gray visible-hover">
            {moment(comment.created_at).fromNow()}
          </div>
        </div>
      </div>
    )
  }
})

window.Comment = Comment
