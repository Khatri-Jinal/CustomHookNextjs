import React, { useEffect, useState } from "react";
import useFetch from "../../components/useFetch";
//import { comments } from "../../data/comments";

// function CommentsPage() {
//   const [comment, setComment] = useState([]);
//   const [text, setText] = useState("");
//   const [updatedComment, setUpdatedComment] = useState("");
//   const fetchComments = async () => {
//     const response = await fetch("http://localhost:4000/comments");
//     const data = await response.json();
//     setComment(data);
//   };
//   const postComments = async () => {
//     const response = await fetch("http://localhost:4000/comments", {
//       method: "POST",
//       body: JSON.stringify({ text }),
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await response.json();
//     fetchComments();
//   };
//   const deleteComment = async (commentId) => {
//     const response = await fetch(
//       `http://localhost:4000/comments/${commentId}`,
//       {
//         method: "DELETE",
//       }
//     );
//     const data = await response.json();
//     fetchComments();
//   };
//   const updateComment = async (commentId) => {
//     const response = await fetch(
//       `http://localhost:4000/comments/${commentId}`,
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: updatedComment, id: commentId }),
//       }
//     );
//     const data = await response.json();
//     setUpdatedComment(updatedComment);
//     fetchComments();
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//       />
//       <input
//         type="text"
//         onChange={(e) => setUpdatedComment(e.target.value)}
//         placeholder="place updates here"
//         value={updatedComment}
//       />
//       <button onClick={postComments}>Post comment</button>
//       <button onClick={fetchComments}>Fetch comments</button>
//       {comment.map((cmt) => {
//         return (
//           <div key={cmt.id}>
//             {cmt.id}
//             {cmt.text}
//             <button onClick={() => deleteComment(cmt.id)}>Delete</button>
//             {/* <input
//               type="text"
//               onChange={(e) => setUpdatedComment(e.target.value)}
//               value={updatedComment}
//             />
//             <input
//               type="text"
//               onChange={(e) => setText(e.target.value)}
//               value={text}
//             /> */}
//             <button onClick={() => updateComment(cmt.id)}>update</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function CommentsPage() {
  const { comment, fetchComments } = useFetch("http://localhost:5000/comments");
  const [text, setText] = useState("");
  const [updatedComment, setUpdatedComment] = useState("");
  const postComments = async () => {
    const response = await fetch("http://localhost:5000/comments", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    fetchComments();
  };
  const deleteComment = async (commentId) => {
    const response = await fetch(
      `http://localhost:5000/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    fetchComments();
  };
  const updateComment = async (commentId) => {
    const response = await fetch(
      `http://localhost:5000/comments/${commentId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: updatedComment, id: commentId }),
      }
    );
    const data = await response.json();
    setUpdatedComment(updatedComment);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input
        type="text"
        onChange={(e) => setUpdatedComment(e.target.value)}
        placeholder="place updates here"
        value={updatedComment}
      />
      <button onClick={postComments}>Post comment</button>
      {/* <button
        onClick={() => {
          setComment({ isLoading: true, comments: [], isError: false });
          fetchComments();
        }}
      >
        Fetch comments
      </button> */}
      {comment.isError ? <div>Error Loading page</div> : null}
      {comment.isLoading ? (
        <div>Loading</div>
      ) : (
        comment.comments.map((cmt) => {
          return (
            <div key={cmt.id}>
              {cmt.id}
              {cmt.text}
              <button onClick={() => deleteComment(cmt.id)}>Delete</button>
              {/* <input
              type="text"
              onChange={(e) => setUpdatedComment(e.target.value)}
              value={updatedComment}
            />
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            /> */}
              <button onClick={() => updateComment(cmt.id)}>update</button>
            </div>
          );
        })
      )}
    </div>
  );
}
// export async function getServerSideProps() {
//   fetchComments();
//   return {
//     props: {
//       comment,
//     },
//   };
// }
export default CommentsPage;
