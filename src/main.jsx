import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import PostDetails, { loader as postDetailsLoader } from "./routs/PostDetails";
import NewPost, { action as newPostAction } from "./routs/NewPost";
import RooTLayout from "./routs/RooTLayout";
import Posts, { loader as postLoader } from "./routs/Posts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RooTLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
