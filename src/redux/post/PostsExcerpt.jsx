import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: " 40px",
        // boxShadow: "1px 1px 3px black",
        margin: "20px 30px",
        border: "1px solid white",
        borderRadius: "5px"
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit" style={{ marginTop: "40px" }}>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
