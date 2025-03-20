import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <div>
        <PostsList />
      </div>
    </>
  );
}

export default Posts;
