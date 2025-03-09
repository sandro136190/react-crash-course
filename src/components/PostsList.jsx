import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Sandro" body="sano" />
      <Post author="Sandro" body="sano" />
    </ul>
  );
};

export default PostsList;
