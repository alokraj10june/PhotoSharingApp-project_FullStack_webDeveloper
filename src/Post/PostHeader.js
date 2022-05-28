export const PostHeader = ({ config }) => {
    return (<div className="PostHeader">
        <div className="PostTitleWrapper">
        <div className="PostTitle">{config.author || ""}</div>
        <div className="PostLocation">{config.location || ""}</div>
    </div>
    <div className="PostAction">...</div>
    </div>)
};
// export default PostHeader;
