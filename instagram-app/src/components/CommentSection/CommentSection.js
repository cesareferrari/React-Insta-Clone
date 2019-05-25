import React from 'react';
import Comment from '../../components/CommentSection/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    }
  }

  addNewComment(event, index) {
  }

  render() {
    return(
      <div className="comment-section">
        {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}

        <input type="text" name="comment" placeholder="Add comment" />
      </div>
    )
  }
}

export default CommentSection;
