const PostContent = ({post}) => {

    const {title, content, slug, publishDate} = post

    return (
        <>
            <div className="w-full max-w-screen-sm mx-auto flex flex-col gap-2"> 
                <a> href={`/posts/${slug}`}
                    <h2 className="text-3xl">{title}</h2>
                </a>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">

                </div>
            </div>
        </>
    )

}