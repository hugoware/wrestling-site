
import { JSDOM } from 'jsdom';
const DOMParser = new JSDOM().window.DOMParser;

import FEEDS from '../data/match-playlists.json';

const CACHE = { };

export default async function getLatestVideos(id) {
  // const cached = CACHE[id];
  // if (cached) {
  //   return cached;
  // }

  const source = FEEDS[id]

  if (!source) {
    return null;
  }


  return fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${source}`)
    .then(response => response.text())
    .then(str => new DOMParser(console.log(str)).parseFromString(str, "text/xml"))
    .then(data => {

      const record = {
        url: `https://www.youtube.com/playlist?list=${source}`,
        recent: []
      }

      data.querySelectorAll('entry').forEach(video => {
        const title = video.querySelector('media\\:title')?.textContent;
        const thumbnail = video.querySelector('media\\:thumbnail')?.getAttribute('url');
        const views = 0 | video.querySelector('media\\:statistics')?.getAttribute('views');
        const url = video.querySelector('media\\:content')?.getAttribute('url');
        record.recent.push({ title, thumbnail, views, url });
      })

      CACHE[source] = record;

      return record;

    });
  
}
