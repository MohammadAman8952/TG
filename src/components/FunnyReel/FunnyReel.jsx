import React, { useEffect, useState } from "react";

const FunnyMeme = () => {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => setMeme(data))
      .catch((err) => console.error("Error fetching meme:", err));
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold mb-4">Random Funny Meme 😂</h2>
      {meme ? (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">{meme.title}</h3>
          <img
            src={meme.url}
            alt={meme.title}
            className="mx-auto max-w-full h-auto rounded"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FunnyMeme;
