import { useState } from "react" 
import BlogPost from "./BlogPost.astro"

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

export default function MoreBlogPosts({currentCursor, size=4, HYGRAPH_ENDPOINT}) {
    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState(currentCursor)
    const [hasNext, setHasNext] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const getMorePosts = () => {
        setLoading(true)
        console.log('in the browser')
        /*
        const response = await fetch(
            HYGRAPH_ENDPOINT, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query: moreBlogQuery,
                    variables: {
                        size: size,
                        cursor: cursor
                    }
                })
            });

        if (!response.ok) {
            throw new Error('Network response was not ok...')
        }

        if (response) {
            const result = await response.json();
            console.log(result)
        }
        */
    

    }

    return (
        <>
            <h1>More Blog Content in Progress...</h1>

            {loading && <div className="bg-emerald-950 p-4 text-slate-200 text-center">Loading...</div>}
            {hasNext && <button className="bg-emerald-950 p-4 text-slate-200 text-center" onClick={getMorePosts}>More Posts</button>}
            {error && <div>Error: {error}</div>}
        </>
    )
}
