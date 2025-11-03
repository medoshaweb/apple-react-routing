import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "AIzaSyAkiVvvCFpcgFpXgjDDr9aSKhFXAq_Ke8g";
    const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
    // const CHANNEL_ID = "UCxqxnjmRS3fM4G7c-qoWpng";
    const MAX_RESULTS = 8;
      
  
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
          
        //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=relevance&key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`YouTube API error: ${response.status}`);
        }
        const data = await response.json();
        if (data.items) {
          setVideos(data?.items);
        } else {
          setError("No videos found.");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div className="error">⚠️ Error: {error}</div>;
  }

  if (videos.length === 0) {
    return <div className="loading">Loading videos...</div>;
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <iframe
            width="100%"
            height="200%"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            description={video.snippet.description}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{video.snippet.title}</p>
          {/* <p>{video.snippet.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default YoutubeVideos;