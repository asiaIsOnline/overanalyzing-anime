import { PiCalendarDotFill, 
        PiUserCircleFill, 
        PiClockFill, 
        PiFolderOpenFill, 
        PiTagFill, 
        PiChatCircleDotsFill, 
        PiHeartFill } from "react-icons/pi"

const BlogPostContent = ({post}) => {

    const {
            title,
            slug,
            body,
            likes,
            postAuthor, 
            postCategories, 
            postTags, 
            publishDate,
            image,
            videoLink,
            videoToggle} = post

    function videoOrBlog (videoToggle) {
        if (videoToggle) {
            return (
                <iframe width="640" height="360" src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
            )         
        } else if (image[0] == undefined) {
            return (
                <p>"There is no video or image attached..."</p>
            )
        } else {
            return (
                <img src={image[0].url} alt={image[0].altText} width="640" height="360"/>
            )
        }
    }
    
    // console.log(image[0])
    //<p className="h-8 text-ellipsis" dangerouslySetInnerHTML={{__html: body.html}}></p>

    return (
        <>
            <div className="w-full max-w-screen-sm mx-auto mb-16 flex flex-col gap-2">
                <a href={`/posts/${slug}`}><h2 className="text-3xl">{title}</h2></a>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <PiCalendarDotFill className="w-6 h-6"/>
                        <p>{new Date(publishDate).toLocaleDateString('en-us', { month: "2-digit", day: "2-digit", year:"numeric"})}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PiUserCircleFill className="w-6 h-6"/>
                        <p>{postAuthor.postAuthor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PiClockFill className="w-6 h-6"/>
                        <p>3 min.</p>
                    </div>
                </div>
                {videoOrBlog(videoToggle)}
                <div className="flex justify-between">
                    <div className="w-4/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <PiFolderOpenFill className="w-6 h-6"/>
                            {
                                postCategories.map(function(element, index, array){
                                    if (index == array.length -1) {
                                        return `${element.categoryName}`
                                    } else {
                                        return `${element.categoryName}, `
                                    }
                                })
                            }
                        </div>
                        <div className="flex items-start gap-2">
                            <PiTagFill className="w-6 h-6"/>
                            {
                                postTags.map(function(element, index, array){
                                    if (index == array.length -1) {
                                        return `${element.tagName}`
                                    } else {
                                        return `${element.tagName}, `
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <PiChatCircleDotsFill className="w-6 h-6"/>
                            <p>0 Comments</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <PiHeartFill className="w-6 h-6"/>
                            <p>{likes} Likes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BlogPostContent