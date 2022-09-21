import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { listPosts } from "../actions/postActions";
import SearchBox from '../components/SearchBox';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

function PostListScreen() {
  const dispatch = useDispatch();
  const location = useLocation()
  let keyword = location.search
  console.log(keyword)
  useEffect(() => {
    dispatch(listPosts(keyword));
  }, [dispatch,keyword]);

  const postList = useSelector(state => state.postList)
  const { loading, error, posts, pages, page } = postList

  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 style={{ marginBottom: "0" }}>Posts</h2>
        <span className="fa-xl mx-3">📰</span>
      </div>
      <hr className="hr-m" />
      <SearchBox />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post._id}>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </div>
          ))}
        
        <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default PostListScreen;
