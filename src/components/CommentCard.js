import { useState } from "react"

const CommentCard = ({ comment, onhandleDelete }) => {
  const [upVotes, setUpVotes] = useState(0)
  const [downVotes, setDownVotes] = useState(0)
  const handleUpVoteClick = () => {
    setUpVotes(prevState => prevState + 1)
  }
  const handleDownVoteClick = () => {
    setDownVotes(prevState => prevState + 1)
  }

  return (
    <div>
      <h2>{comment.user}</h2>
      <p>{comment.comment}</p>
      <button onClick={handleUpVoteClick}>{upVotes}👍</button>
      <button onClick={handleDownVoteClick}>{downVotes}👎</button>
      <button onClick={() => onhandleDelete(comment)}>Delete</button>
    </div>
  )
}

export default CommentCard