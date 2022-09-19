import React from 'react'

function PostListScreen() {
  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 style={{marginBottom:"0"}}>Posts</h2>
        <span className="fa-xl mx-3">📰</span>
      </div>
      <hr className="hr-m"/>
    </div>
  )
}

export default PostListScreen