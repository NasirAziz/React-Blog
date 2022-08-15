import { Avatar } from "@mui/material"

const UserInfo = ({ profileImg, username, publishDate }) => {
    return (
        <div className="description__userinfo">
            <Avatar src={profileImg} />
            <div>
                <p className="description__username">{username}</p>
                <p>{new Date(publishDate).toDateString()}</p>
            </div>
        </div>
    )
}

export default UserInfo
