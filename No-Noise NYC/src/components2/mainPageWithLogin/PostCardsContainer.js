import { useEffect, useState } from 'react'
import PostCard from './PostCard'

export default function PostCardsContainer ({ posts, setPosts }) {
  const postContainerStyling = {
    padding: '20px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-around', flexWrap: 'wrap'
  }

  // const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4005/post')
      .then(res => res.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <div style={postContainerStyling}>
      {posts.length !== 0 && posts.map(x => <PostCard user={x.username} message={x.post_description} />)}
    </div>
  )
}
