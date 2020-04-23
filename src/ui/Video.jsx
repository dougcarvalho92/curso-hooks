import React from "react";

export default function Video(props) {
  const video = props.video || {};
  const onClick = props.onClick || {};

  return (
    <li onClick={() => onClick(video)}>
      <img src={video.cover} alt={video.title} />
      <span>{video.duration}</span>
      <h2>{video.title}</h2>
    </li>
  );
}
// title
// duration
// url
// cover
