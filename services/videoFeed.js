import { JSDOM } from 'jsdom';
import FEEDS from '../data/match-playlists.json';

// access to the DOMParser 
const DOMParser = new JSDOM().window.DOMParser;

// cache for incoming data
const CACHE = { };

export default async function getLatestVideos(id) {
  
  // check if the data has already been loaded
  const cached = CACHE[id];
  if (cached) {
    return cached;
  }

  // make sure the player has any videos
  const source = FEEDS[id]
  if (!source) {
    return null;
  }

  // request the videos
  return fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${source}`)
    .then(response => response.text())
    .then(str => new DOMParser(console.log(str)).parseFromString(str, "text/xml"))
    .then(data => {

      // create the record
      const record = {
        url: `https://www.youtube.com/playlist?list=${source}`,
        recent: []
      }

      // gather up all videos
      data.querySelectorAll('entry').forEach(video => {
        const title = video.querySelector('media\\:title')?.textContent;
        const thumbnail = video.querySelector('media\\:thumbnail')?.getAttribute('url');
        const views = 0 | video.querySelector('media\\:statistics')?.getAttribute('views');
        const url = video.querySelector('media\\:content')?.getAttribute('url');
        record.recent.push({ title, thumbnail, views, url });
      })

      // cache for later
      CACHE[source] = record;

      return record;
    });
  
}
