import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts
} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  // const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      if (postStatus === "idle") {
        dispatch(fetchPosts());
        ref.current = false;
      }
    }
  }, [postStatus, dispatch, ref]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading ..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p> {error} </p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
