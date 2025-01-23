import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const formattedViews = video?.stats.views ? formatNumber(video.stats.views) : "0";

  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  }
  const svg = (
    <svg width="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path></svg>
  )

  return (
    <>
      <Link to={`/Video/${video?.videoId}`} className="card w-[19rem] ">
        <div className="card_video w-[100%] h-[11rem] bg-white overflow-hidden rounded-lg">
          {video?.thumbnails[0]?.url ? (
            <img
              src={video.thumbnails[0].url}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            <p>No thumbnail available</p>
          )}
        </div>
        <div className="flex gap-3 pt-[14px]">
          <div className="left flex-shrink-0">
            <img
              className="w-[35px] h-[35px] rounded-full"
              src={video?.author?.avatar[0]?.url}
              alt=""
            />
          </div>
          <div className="right">
            <div className="card_heading text-[17px]">{video?.title}</div>
            <div className="card_desc text-[#727272] text-[13px]">
              {video?.description}
            </div>
            <div className="wrap flex flex-col text-[#727272] text-[13px] mt-[11px] leading-[15px] ">
            <p className="flex gap-3" >{video?.author?.title} {video?.author?.badges[0]?.text === "Verified" ? svg : ""}</p> 
            <div className="card_info flex gap-3 items-center text-[#727272] text-[13px]">
              <p>{formattedViews} views</p>
              <p className="flex items-center gap-1">
                <span className="text-lg">•</span>
                {video?.publishedTimeText}
              </p>
            </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
