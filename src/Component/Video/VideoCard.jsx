import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/Video/${video?.videoId}`} className="card w-[30%]">
        <div className="card_video w-[20rem] h-[10rem] bg-white overflow-hidden">
          {video.thumbnails[0].url ? (
            <img
              src={video.thumbnails[0].url}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            <p>No thumbnail available</p>
          )}
        </div>
        <div className="card_heading text-[18px]">{video?.title}</div>
        <div className="card_desc text-[#727272] text-[13px] ">
          {video?.description}
        </div>
        <div className="card_info flex gap-3 text-[#727272] text-[13px]">
          <p>{video?.viewCount}</p>
          <p>{video?.publishedTimeText}</p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
