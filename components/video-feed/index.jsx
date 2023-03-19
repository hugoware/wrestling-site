import { useEffect, useState } from 'react';

export default function VideoFeed() {
  const [videos, setVideos] = useState();
  const [error, setError] = useState();

  async function refreshVideos() {
    const response = await fetch('/api/get-latest')
    const result = await response.json()
    const { results: videos, error } = result;

    // update the data
    setError(error);
    setVideos(videos);
  }

  // when loading, refresh the video feed
  useEffect(() => {
    refreshVideos();
  });

  // if not loaded yet
  if (!(videos || error)) {
    return <>Loading</>
  }

  // if there's an error
  if (error) {
    return <div className='text-red-600' >{error}</div>
  }

  // since the feed loaded, show the result
  return videos?.map?.(video => (
    <div className="rounded-lg bg-red-700 text-white p-3 m-2">
      <a href={video.mediaUrl}>
        <h3 className='text-xl' >{video.title}</h3>
        
        <img src={video.thumbnailUrl} />
        <p>{video.timeSpan}</p>
      </a>
    </div>
  ))
}