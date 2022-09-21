import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_CREATE_REVIEW_RESET } from '../constants/postConstants'
import { listPostDetails, createPostReview } from '../actions/postActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PostScreen() {
  const [comment, setComment] = useState('')
  const location = useLocation()
  const params = useParams()


  const dispatch = useDispatch()


  const postDetails = useSelector(state => state.postDetails)
  const { loading, error, post } = postDetails
  

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  

  const postReviewCreate = useSelector(state => state.postReviewCreate)
  const {
      loading: loadingPostReview,
      error: errorPostReview,
      success: successPostReview,
  } = postReviewCreate
  useEffect(() => {
    if (successPostReview) {
        setComment('')
        dispatch({ type: POST_CREATE_REVIEW_RESET })
    }

    dispatch(listPostDetails(params.id))

}, [dispatch, params, successPostReview])

const submitHandler = (e) => {
  e.preventDefault()
  dispatch(createPostReview(
      params.id, {
      comment
  }
  ))
}
   

  
  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      {loading ? <Loader/>: error ? <Message variant="danger">{error}</Message>:(
        <div></div>
      )}
    </div>
  );
}

export default PostScreen;
