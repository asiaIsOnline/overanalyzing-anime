import { useState } from "react"

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
    
    console.log('in the browser')

    const getMorePosts = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                HYGRAPH_ENDPOINT, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: moreBlogQuery, 
                        variables: {
                            size: size,
                            cursor: currentCursor
                        }
                    })
                })
            
            const result = await response.json();
            setLoading(false)
            console.log(result)

            if (result.error) {
                throw new Error(result.errors[0].message)
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <>
            <h1>More Blog Content in Progress...</h1>
            {loading && <div className="bg-emerald-950 p-4 text-slate-200 text-center">Loading...</div>}
            {hasNext && <button className="bg-emerald-950 p-4 text-slate-200 text-center" onClick={getMorePosts}>More Posts</button>}

        </>
    )
}

export default MoreBlogPosts