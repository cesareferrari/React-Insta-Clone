import React from 'react';
import Comment from '../../components/CommentSection/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentText: ''
    }
  }

  addNewComment = (event) => {
    event.preventDefault();

    let newComment = {
      id: 10,
      username: 'dummy',
      text: this.state.commentText
    }

    this.setState({
      comments: [...this.state.comments, newComment ]
    })
  }

  changeHandler = event => {
    this.setState({commentText: event.target.value});
  }

  render() {
    return(
      <div className="comment-section">
        {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}

        <form className="comment-form" onSubmit={this.addNewComment} >
          <input
          type="text"
          name="comment"
          placeholder="Add comment"
          value={this.state.commentText}
          onChange={this.changeHandler}
          />
        </form>
      </div>
    )
  }
}

export default CommentSection;
