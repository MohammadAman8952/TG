import React, { useEffect, useState } from "react";

const FunnyVideos = () => {
  const [videos, setVideos] = useState([]);
  const [meme, setMeme] = useState(null);

  // Fetch videos once
  useEffect(() => {
    fetch("/data/funnyVideos.json")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Function to fetch meme when button is clicked
  const fetchMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => setMeme(data))
      .catch((err) => console.error("Error fetching meme:", err));
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-lg font-bold mb-4">Funny Videos</h2>

      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-gray-100 shadow p-4 mb-4 rounded md:flex"
        >
          <h3 className="text-center font-semibold mb-2">{video.title}</h3>
          <video controls className="w-[85%] h-[344px] md:w-[25%]">
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

      {/* Button to show meme */}
      <div className="text-center mt-6">
        <button
          onClick={fetchMeme}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Show Funny Meme 😂
        </button>
      </div>

      {/* Show meme if available */}
      {meme && (
        <div className="bg-gray-100 p-4 rounded shadow text-center max-w-xl mx-auto mt-6">
          <h3 className="font-semibold mb-2">{meme.title}</h3>
          <img
            src={meme.url}
            alt={meme.title}
            className="mx-auto max-w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
};

export default FunnyVideos;
