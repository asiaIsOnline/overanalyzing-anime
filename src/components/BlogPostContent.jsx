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
                <iframe width="640" height="360" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            )         
        } else {
            return (
                image.map(function(img) {
                    <img src={img.url} alt={img.altText} width="640" height="360"/>
                })
            )
        }
    }
    
    console.log(image[0].url)
    //{videoOrBlog(videoToggle)}
    //<p className="h-8 text-ellipsis" dangerouslySetInnerHTML={{__html: body.html}}></p>

    return (
        <>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <PiCalendarDotFill className="w-6 h-6"/>
                    <p>{publishDate}</p>
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
            
            <div className="flex justify-between">
                <div class="w-4/5 flex flex-col gap-2">
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
        </>
    )

}

export default BlogPostContent