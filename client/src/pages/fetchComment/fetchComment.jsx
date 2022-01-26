import React from 'react'
import { useQuery, gql } from '@apollo/client'
const Home = () => {
  // test query method
  const { loading, data } = useQuery(FETCH_POSTS_QUERY)

  console.log(data)
  return (
    <div>
      Home
      {loading ? (
        <h1>Loading posts ...</h1>
      ) : (
        <ul>
          {data &&
            data.getPosts.map((post, index) => (
              <li key={index}>{post.body}</li>
            ))}
        </ul>
      )}
    </div>
  )
}
// data de l'object
const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`
export default Home
