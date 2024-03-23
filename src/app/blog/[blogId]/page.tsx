import React from 'react'

const page = ({ params, }: {
    params: {
        blogId: "string"
    }
}) => {
    return (
        <h1>Details of blog {params.blogId}</h1>
    )
}

export default page