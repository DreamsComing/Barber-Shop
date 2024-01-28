import React, {useState} from 'react'
import "./Comment.css"

function Comment({closeComments}) {
    const [comment, setComment] = useState('');
    const [submittedComments, setSubmittedComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setSubmittedComments([...submittedComments, comment]);
      setComment('');
    }
  };
  return (
    <div className='Comment'>
      <div className='exit'>
        <button onClick={closeComments}>x</button>
      </div>
      <div className='blockComment'>
        <div>
          <h2 >Customer Comments</h2>
        <div>
          <h3>Submitted Comments:</h3>
          <ul>
            {submittedComments.map((submittedComment, index) => (
              <li key={index}>{submittedComment}</li>
            ))}
          </ul>
        </div>
          
        <form className="commentForm"onSubmit={handleSubmit}>
          <label htmlFor="comment">Leave your comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Type your comment here..."
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>


    </div>
      </div>
    </div>
  )
}

export default Comment
