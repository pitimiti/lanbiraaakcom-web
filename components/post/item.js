function PostItem({ post }) {
    const UPLOAD_FOLDER_URL = process.env.API_URL + 'uploads/posts/'

    return (
        <>
            <div className="post">
                <div className="head">
                    <img src="/images/logo.png" />
                </div>
                <div className="image">
                    <img src={UPLOAD_FOLDER_URL + post.photo} className="img-fluid w-100" />
                </div>
                <div className="bottom">lanbiraaak.com</div>
            </div>
        </>
    )
}

export default PostItem
