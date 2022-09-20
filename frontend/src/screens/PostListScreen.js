import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listPosts } from "../actions/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function PostListScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  const postList = useSelector(state => state.postList)
  const { loading, error, posts, pages, page } = postList

  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 style={{ marginBottom: "0" }}>Posts</h2>
        <span className="fa-xl mx-3">📰</span>
      </div>
      <hr className="hr-m" />
      { loading ?
      <Loader /> :
      error ? <Message variant="danger">{error}</Message> :
      (
        posts.map((post) => (
          <div key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
            
          </div>
        ))
      ) }
    </div>
  );
}

export default PostListScreen;
