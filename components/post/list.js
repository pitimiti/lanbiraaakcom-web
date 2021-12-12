import PostItem from '../post/item'

function PostList({ posts }) {
    return (
        <>
            {posts.map((post, i) => (
                <PostItem post={post} key={i}></PostItem>
            ))}
        </>
    )
}

export default PostList
