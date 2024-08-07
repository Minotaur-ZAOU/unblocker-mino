document.getElementById('playButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const videoFrame = document.getElementById('videoFrame');

    const videoId = getYouTubeVideoId(urlInput);
    if (videoId) {
        const invidiousUrl = `https://invidious.opencap.me/watch?v=${videoId}`;
        videoFrame.src = invidiousUrl;
        videoFrame.style.display = "block";
    } else {
        alert("有効なYouTubeのURLを入力してください。");
    }
});

function getYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|watch)\??|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9-_]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
