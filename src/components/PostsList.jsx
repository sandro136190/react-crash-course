import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = ({}) => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts</h2>
          <p>If u want to see if it works please add some posts</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
