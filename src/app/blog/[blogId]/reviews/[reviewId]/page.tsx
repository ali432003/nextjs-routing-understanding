import React from 'react'

const page = ({params}:{params:{
    blogId : "string",
    reviewId : "string"
}}) => {
  return (
    <h1>Review {params.reviewId} of blog {params.blogId}</h1>
  )
}

export default page