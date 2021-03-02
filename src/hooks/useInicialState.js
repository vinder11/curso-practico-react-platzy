import { useState, useEffect } from 'react';

const useInicialState = (API) => {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
};

export default useInicialState;
