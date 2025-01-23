import React from "react";
import { useContext } from "react";
import { Context } from "../../context/ContextApi";
import VideoCard from "./VideoCard";

const VideosData = () => {
  const { Loading, SearchResult } = useContext(Context);

  
  return (
    <>
    {/* <div className="videoCard_wrapper bg-red-400 w-[80%] ml-auto"> */}
    <div className="flex flex-wrap justify-center gap-[1.2rem] pt-20 w-[85%] ml-auto">

    {SearchResult?.length > 0 ? (
        SearchResult.map((val) => {
          // console.log(val);
          
          if (val.type !== "video") return null; // Skip non-video items
          return <VideoCard key={val?.video?.videoId} video={val?.video} />;
        })
      ) : (
        <div>No results found.</div> // Render a fallback message if no results exist
      )}
      </div>
    </>
  );
};

export default VideosData;
