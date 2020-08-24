import React from 'react';
import Comment from './Comment';
import './Comments.css';
import PostHeader from '../Posts/PostHeader';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
console.log("comments: ", comments);
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
  {comments.map((comment, index) => { return <Comment key={index} comment={comment} />})}
    </div>
  );
};

export default Comments;
// // app - searchbar
// //     -posts - post - PostHeader
//                      - comments - comment
                                
//                      - likesection
