import { useState } from 'react'
import CommentCard from "./CommentCard"

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(true)
  const [searchComments, setSearchComments] = useState('')

  const handleClick = () => {
    setShowComments(prevShowComment => !prevShowComment)
  }

  const filteredComments = comments.filter(comment => {
    if (comment.user.toLowerCase().includes(searchComments)) {
      return true
    }
  })
  const displayComments = filteredComments.map(comment => <CommentCard comment={comment} />)
  return (
    <>

      <input
        type='search'
        value={searchComments}
        onChange={(e) => setSearchComments(e.target.value)}
        placeholder='Search Comments...'
      />
      <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
      {showComments && displayComments}
    </>
  )
}

export default Comments