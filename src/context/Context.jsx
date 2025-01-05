import { createContext, useEffect, useState } from "react";

export const VideoContext = createContext();
const Context = (props) => {
  const [videoData, setvideoData] = useState(null);

  const getData = async () => {
    const url = "https://yt-api.p.rapidapi.com/home";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bd4952d2d3msh9abeee0175921f8p10843ajsn1bd70606847a",
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setvideoData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(videoData);

  return (
    <VideoContext.Provider value={videoData}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default Context;
