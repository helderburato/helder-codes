import React, { memo } from "react";

const Post = ({ post }) => {
  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  );
};

export default memo(Post);
