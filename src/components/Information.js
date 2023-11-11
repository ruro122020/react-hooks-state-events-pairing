import {useState} from 'react'
const Information = ({ views, uploadedDate, likes, dislikes }) => {
    const [upVotes, setUpVotes] = useState(likes)
    const [downVotes, setDownVotes] = useState(dislikes)
    const handleClickUpVote = () => {
      setUpVotes(prevUpVotes => prevUpVotes + 1)
    }
    const handleDownVoteClick = () => {
      setDownVotes(prevDownVotes => prevDownVotes + 1)
    }
    return (
      <div>
        <p>{views} Views | Uploaded {uploadedDate}</p>
        <button onClick={handleClickUpVote}>{upVotes}👍</button>
        <button onClick={handleDownVoteClick}>{downVotes}👎</button>
      </div>
    )
  
  }

  export default Information