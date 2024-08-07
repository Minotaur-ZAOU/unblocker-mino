export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { url } = req.body;
  
  // YouTubeのURLからIDを抽出
  const youtubeId = url.split('v=')[1]?.split('&')[0];
  if (!youtubeId) {
    return res.status(400).json({ message: 'Invalid YouTube URL' });
  }

  // InvidiousのURLを作成
  const invidiousUrl = `https://invidious.example.com/watch?v=${youtubeId}`; // 例としてのInvidiousのURL

  return res.status(200).json({ invidiousUrl });
}
