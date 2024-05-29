import { PiCalendarDotFill, 
        PiUserCircleFill, 
        PiClockFill, 
        PiFolderOpenFill, 
        PiTagFill, 
        PiChatCircleDotsFill, 
        PiHeartFill } from "react-icons/pi"

const BlogPostContent = ({post}) => {

    const {title, 
            slug, 
            publishDate, 
            body, 
            author, 
            category, 
            tag, 
            commentNumber,
            likeNumber, 
            imageURL, 
            imageAltText,
            videoURL,
            videoToggle} = post

    console.log(slug)
    return (
        <>
            <a> href={`/posts/${slug}`}
                <h2 className="text-3xl">{title}</h2>
            </a>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <PiCalendarDotFill className="w-6 h-6"/>
                    <p>{publishDate}</p>
                </div>
                <div className="flex items-center gap-2">
                    <PiUserCircleFill className="w-6 h-6"/>
                    <p>{author}</p>
                </div>
                <div className="flex items-center gap-2">
                    <PiClockFill className="w-6 h-6"/>
                    <p>3 min.</p>
                </div>
            </div>
            { 
            videoToggle ? <iframe width="640" height="360" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : 
            <img src={imageURL} alt={imageAltText} width="640" height="360"/>
            }
            <p className="h-8 text-ellipsis"></p>
            <div className="flex justify-between">
                <div class="w-4/5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <PiFolderOpenFill className="w-6 h-6"/>
                        {
                            /*
                            category.map(function(element, index, array){
                                if (index == array.length -1) {
                                    return `${element.categoryName}`
                                } else {
                                    return `${element.categoryName}, `
                                }
                            })
                            */
                        }
                    </div>
                    <div className="flex items-start gap-2">
                        <PiTagFill className="w-6 h-6"/>
                        {
                            /*
                            tag.map(function(element, index, array){
                                if (index == array.length -1) {
                                    return `${element.tagName}`
                                } else {
                                    return `${element.tagName}, `
                                }
                            })
                            */
                        }
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <PiChatCircleDotsFill className="w-6 h-6"/>
                        <p>{commentNumber} Comments</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PiHeartFill className="w-6 h-6"/>
                        <p>{likeNumber} Likes</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BlogPostContent