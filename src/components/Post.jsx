import React from "react";
const names = ["Otari", "Vaja"];

const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>Resct.js isnot awesome!</p>
    </div>
  );
};

export default Post;
