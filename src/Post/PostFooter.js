import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
const PostFooter = ({ config }) => {
    const postedOnDate=new Date(config.date),
    postedOn=`${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
    return (<div className="PostFooter">
        <div className="PostDetails">
            <div className="LikeShareWrapper">
                <div className="LikeShareContainer">
                <button className="LikeBtn">
                <FavoriteBorderIcon/>
                </button>
                <button className="ShareBtn">
                <SendIcon/>
                </button>
                </div>
                <div className="Likes">{config.likes}</div>
            </div>
            <div className="PostedOn">{postedOn}</div>
        </div>
        <div className="PostCaption">{config.description}</div>
    </div>
    );
};

const MonthNames=["Jan","Feb","Mar","June","July","Aug","Sep","Oct","Nov","Dec"]
export default PostFooter;
