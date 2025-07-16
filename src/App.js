import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const generateMeme = async () => {
    const res = await fetch("https://gptroll-ai-backend.vercel.app/api/generate-meme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setImage(data.imageUrl);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>GPTROLL Meme Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter meme prompt..."
        style={{ width: '300px', padding: '10px' }}
      />
      <button onClick={generateMeme} style={{ padding: '10px', marginLeft: '10px' }}>
        Generate Meme
      </button>
      {image && (
        <div style={{ marginTop: '20px' }}>
          <img src={image} alt="Generated Meme" style={{ maxWidth: '500px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
