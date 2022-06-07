const PostImage = ({ config }) => {
    const relativeImageURL=`../Assets1/${config.PostImage}`;
    return <div className="PostImageWrapper">
        <img className="myimg" src={`https://instaclonebackend-10x.herokuapp.com/${config.image}`} alt="" />
    </div>;
};
export default PostImage;
