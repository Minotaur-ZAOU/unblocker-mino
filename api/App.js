import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = getYouTubeID(url);
    if (id) {
      setVideoId(id);
    } else {
      alert('有効なYouTubeのURLを入力してください。');
    }
  };

  const getYouTubeID = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>YouTube to Invidious</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="YouTubeのURLを入力"
          required
          style={{ width: '100%', maxWidth: '400px', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', margin: '10px' }}>再生</button>
      </form>
      {videoId && (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://invidious.example.com/embed/${videoId}`} // ここを適切なInvidiousのURLに変更
            title="Invidious Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <footer style={{ marginTop: '20px', fontSize: 'small' }}>
        made by minotaur
      </footer>
    </div>
  );
}

export default App;
