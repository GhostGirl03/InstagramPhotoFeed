const accessToken = 'TU_ACCESS_TOKEN'; // Reemplaza con tu access token de Instagram

fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`)
  .then(response => response.json())
  .then(data => {
    const feed = document.querySelector('.instagram-feed');
    data.data.forEach(post => {
      if (post.media_type === 'IMAGE') {
        const img = document.createElement('img');
        img.src = post.media_url;
        feed.appendChild(img);
      }
    });
  })
  .catch(error => console.error(error));