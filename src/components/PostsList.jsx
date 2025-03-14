import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author="Sandro" body="sano" />
      </ul>
    </>
  );
};

export default PostsList;
