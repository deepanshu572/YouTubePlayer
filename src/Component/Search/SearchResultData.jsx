import React from "react";
import { Link} from "react-router-dom"
const SearchResultData = ({ videoData }) => {

  const  video  = videoData.video;

  const formattedViews = video?.stats.views ? formatNumber(video.stats.views) : "0";
    
  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  }

  return (
    <>

       <Link to={`/Video/${video?.videoId}`} className="card w-[19rem]"

        class="card flex gap-[28px] mb-4 pr-[25px]"
        href="#"
        data-discover="true"
      >
        <div class="card_video w-[23rem] h-[auto] flex-shrink-0 bg-white overflow-hidden rounded-lg">
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
        <div class="flex gap-3 pt-[14px]">
          <div class="left flex-shrink-0">
            <img
              class="w-[35px] h-[35px] rounded-full"
              src={video?.author?.avatar[0]?.url}
              alt=""
            />
          </div>
          <div class="right">
            <div class="card_heading text-[18px]">
            {video?.title}
            </div>
            <div class="card_desc text-[#727272] text-[13px]"></div>
            <div class="card_info flex gap-3 items-center text-[#727272] text-[13px]">
              <p>{formattedViews} views</p>
              <p class="flex items-center gap-1">
                <span class="text-lg">•</span>{video?.publishedTimeText}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchResultData;
