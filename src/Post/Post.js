import PostFooter from "./PostFooter";
import {PostHeader} from "./PostHeader";
import PostImage from "./PostImage";

const Post = ({post}) => {
  
    return <div className="PostContainer">
        <PostHeader config={post}/>
        <PostImage config={post}/>
        <PostFooter config={post}/>
    </div>
};
export default Post;