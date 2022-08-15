import "./Description.css";
import UserInfo from "./UserInfo";

const Info = ({ blog }) => {
    return (
        <div className="description__info">
            {blog && blog.Description}
            <UserInfo
                username={blog.author && blog.author.fullName}
                profileImg={blog.author && blog.author.profileImgUrl}
                publishDate={blog && blog.publishDate}
            />
        </div>
    )
}

export default Info
