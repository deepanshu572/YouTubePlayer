import { createContext, useEffect, useState } from "react";
// import ApiData from "./Api";

export const VideoContext = createContext();
const Context = (props) => {
  const [videoData, setvideoData] = useState();

  console.log(videoData);

  return (
    <VideoContext.Provider value={[videoData]}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default Context;
