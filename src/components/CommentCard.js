const CommentCard = ({ comment }) => {
    return (
      <div>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
      </div>
    )
  }

  export default CommentCard