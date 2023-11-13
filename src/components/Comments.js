import { useState } from 'react'
import CommentCard from "./CommentCard"

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(true)
  const [searchComments, setSearchComments] = useState('')
  //set comments to a state for the delete comment functionality
  const [commentsList, setCommentsList] = useState(comments)

  const handleClick = () => {
    setShowComments(prevShowComment => !prevShowComment)
  }

  const filteredComments = commentsList.filter(comment => {
    if (comment.user.toLowerCase().includes(searchComments)) {
      return true
    }
  })
  const handleDeleteComment = (deleteComment) => {
    const newCommentsList = commentsList.filter(comment => comment.id !== deleteComment.id)
    setCommentsList(newCommentsList)
  }
  const displayComments = filteredComments.map(comment => <CommentCard key={comment.id} comment={comment} onhandleDelete={handleDeleteComment} />)
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