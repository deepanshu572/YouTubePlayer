import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ContextApi";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../Utils/api";
import ReactPlayer from "react-player";
const VideoDetail = () => {
  const [video, SetVideo] = useState();
  const [relatedVideo, SetRelatedVideo] = useState();
  const { Loading, SetLoading } = useContext(Context);
  const { id } = useParams();
  console.log(id);


  useEffect(() => {
    FetchVideoData();
    FetchRelatedVideoData();
  }, [id]);
  
  const FetchVideoData = () => {
    SetLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      // console.log(res);
      SetVideo(res);
      SetLoading(false);
    });
  };
  const FetchRelatedVideoData = () => {
    SetLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      SetRelatedVideo(res);
      SetLoading(false);
    });
  };
  return <>
  
  <ReactPlayer
  url={`https://www.youtube.com/watch?v=${id}`}
  controls
  />
  <p>{video?.title}</p>

  </>;
};

export default VideoDetail;
