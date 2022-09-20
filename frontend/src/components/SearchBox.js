import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate()
    let location = useLocation()
    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`${location.pathname}?keyword=${keyword}&page=1`)
        } else {
            navigate(navigate(`${location.pathname}`))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline="true">
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value.toString())}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchBox
