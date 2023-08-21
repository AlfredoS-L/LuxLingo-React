import "./post.css"
import {MoreVert, Favorite, ThumbUp} from "@mui/icons-material"
export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postPfpImg" src="/assets/pfp/stry.png" alt=""/>
                        <span className="postUsername">Alfredo Sandoval-Luis</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post :)</span>
                    <img className="postImg" src="/assets/pfp/stry.png" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="heartIcon">
                            <Favorite/>
                        </div>
                        <div className="likeIcon">
                            <ThumbUp/>
                        </div>
                        <span className="postLikeCounter">70 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}