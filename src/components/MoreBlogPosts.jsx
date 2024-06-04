import { useState } from "react"
import BlogPostContent from "./BlogPostContent"

const moreBlogQuery = `
query moreBlogQuery($cursor: String!, $size: Int!) {
    postsConnection(after:$cursor, first: $size, orderBy: publishDate_DESC) {
        postsArray: edges {
            cursor
            posts: node {
                title
                slug
                body {
                    html
                    }
                likes
                postAuthor {
                    postAuthor
                    }
                postCategories {
                    categoryName
                    }
                postTags {
                    tagName
                    }
                publishDate
                image {
                    altText
                    url
                    }
                videoLink
                videoToggle
                }
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}`

function MoreBlogPosts({currentCursor, size=4, HYGRAPH_ENDPOINT}) {
    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState(currentCursor)
    const [hasNext, setHasNext] = useState(true)
    const [loading, setLoading] = useState(false)

    const getMorePosts = async () => {
        setLoading(true)
            const response = await fetch(
                HYGRAPH_ENDPOINT, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        query: moreBlogQuery, 
                        variables: {
                            size: size,
                            cursor: cursor
                        }
                    })
                })

                
            if (!response.ok) {
                throw new Error("Issue obtaining response from CMS")
            }

            const data = await response.json();
            
            const { postsArray, pageInfo } = data.data.postsConnection

            setPosts([...posts, ...postsArray])
            setCursor(pageInfo.endCursor)
            setHasNext(pageInfo.hasNextPage)
            setLoading(false)

            if (posts.length == 0) {
                console.log("The posts array is empty...")
                console.log(posts)
            } else {
                console.log("There are posts.")
                console.log(posts)
            }

    }

    return (
        <>
            {posts.map((post) => (
                <div key={post.cursor}>
                    <BlogPostContent post={post.posts} />
                </div>
            ))}

            {loading && <div className="text-emerald-950">Loading...</div>}
            {hasNext && <button className="bg-emerald-950 p-4 text-slate-200 text-center" onClick={getMorePosts}>See Older Posts</button>}
        </>
    )
}

export default MoreBlogPosts