import axios from 'axios'
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,

    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,

    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL,

    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,

    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAIL,

    POST_CREATE_REVIEW_REQUEST,
    POST_CREATE_REVIEW_SUCCESS,
    POST_CREATE_REVIEW_FAIL,

} from '../constants/postConstants'

export const listPosts = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: POST_LIST_REQUEST })

        const { data } = await axios.get(`/api/posts${keyword}`)

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: POST_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/posts/${id}`)

        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POST_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deletePost = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/posts/delete/${id}/`,
            config
        )

        dispatch({
            type: POST_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: POST_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const createPost = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/posts/create/`,
            {},
            config
        )
        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const updatePost = (post) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/posts/update/${post._id}/`,
            post,
            config
        )
        dispatch({
            type: POST_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: POST_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createPostReview = (postId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/posts/${postId}/reviews/`,
            review,
            config
        )
        dispatch({
            type: POST_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: POST_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}