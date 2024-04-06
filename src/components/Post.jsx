
import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([
    ]);
    const [newComment, setNewComment] = useState('');

    function handleLike() {
        setLikes(likes + 1);
    }

    const addComment = (e) => {
        e.preventDefault(); 
        if (!newComment.trim()) return; 
        setComments([...comments, newComment]); 
        setNewComment(''); 
    };

    return (
        <div>
            <h3>{props.content}</h3>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <div>
                <h4>Comments:</h4>
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment} />
                ))}
                <form onSubmit={addComment}>
                    <input 
                        type="text" 
                        value={newComment} 
                        onChange={(e) => setNewComment(e.target.value)} 
                        placeholder="Add a comment..."
                    />
                    <button type="submit">Comment</button>
                </form>
            </div>
        </div>
    );
}

export default Post;
