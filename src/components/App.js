import { useState } from 'react'
import video from "../data/video.js";
import { render } from '@testing-library/react';
import Information from './Information.js';
import Comments from './Comments.js';
function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <Information
        views={video.views}
        uploadedDate={video.createdAt}
        likes={video.upvotes}
        dislikes={video.downvotes} />
      <Comments comments={video.comments} />
    </div>
  );
}
export default App;
