import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost from "./routs/NewPost";
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
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
