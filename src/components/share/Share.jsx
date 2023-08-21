import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="sharePfpImg" src="/assets/pfp/stry.png" alt=""/>
                    <input
                        placeholder="What's on your mind?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="#ff5e18" className="shareIcon"/>
                            <span className="shareOptionText">Media</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="#ff5e18" className="shareIcon"/>
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="#ff5e18" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="#ff5e18" className="shareIcon"/>
                            <span className="shareOptionText">Feels</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}