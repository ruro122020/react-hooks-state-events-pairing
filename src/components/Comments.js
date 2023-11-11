import {useState} from 'react'
import CommentCard from "./CommentCard"

const Comments = ({ comments }) => {
    const [showComments, setShowComments] = useState(true)
    const handleClick = () => {
      setShowComments(prevShowComment => !prevShowComment)
    }
    const displayComments = comments.map(comment => <CommentCard comment={comment} />)
    return (
      <>
        <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
        {showComments && displayComments}
      </>
    )
  }

  export default Comments