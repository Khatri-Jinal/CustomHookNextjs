import React, { useState, useEffect } from "react";
function useFetch(url) {
  const [comment, setComment] = useState({
    isLoading: false,
    comments: [],
    isError: false,
  });
  const fetchComments = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setComment({ isLoading: false, comments: data, isError: false });
    } catch (err) {
      setComment({ isLoading: false, comments: [], isError: true });
      // Handle errors here
    }
  };
  useEffect(() => {
    setComment({ isLoading: true, comments: [], isError: false });
    fetchComments();
  }, []);
  return { comment, fetchComments };
}

export default useFetch;
