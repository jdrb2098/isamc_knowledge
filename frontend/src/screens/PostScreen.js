import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PostScreen() {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);

  const { loading, error, post } = postDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postReviewCreate = useSelector((state) => state.postReviewCreate);
  const {
    loading: loadingPostReview,
    error: errorPostReview,
    success: successPostReview,
  } = postReviewCreate;

  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      PostScreen
    </div>
  );
}

export default PostScreen;
