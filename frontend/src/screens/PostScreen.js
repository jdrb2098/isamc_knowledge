import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_CREATE_REVIEW_RESET } from '../constants/postConstants'
import { listPostDetails, createPostReview } from '../actions/postActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";

function PostScreen() {
  const [comment, setComment] = useState('')
  const location = useLocation()
  const params = useParams()


  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const postDetail = useSelector(state => state.postDetail)
  const { loading, error, post, } = postDetail
  const postReviewCreate = useSelector(state => state.postReviewCreate)
  console.log(postReviewCreate)
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
  }, [dispatch,params,successPostReview])
  console.log(post)
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
        <div>
          <Row>
                                <Col md={6}>
                                    <h4>Reviews</h4>
                                    {post.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {post.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>Write a review</h4>

                                            {loadingPostReview && <Loader />}
                                            {successPostReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorPostReview && <Message variant='danger'>{errorPostReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    
                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingPostReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
        </div>
      )}
    </div>
  );
}

export default PostScreen;
