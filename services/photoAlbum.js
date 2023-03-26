import scrapeIt from 'scrape-it';
import SOURCES from '../data/albums.json';

// holds all albums
let albums;
let source;

// reads all photo albums
export default async function getPhotoAlbums() {
  if (albums && source === SOURCES) {
    return albums
  }

  // request all albums
  const pending = SOURCES.map(source => {
    return new Promise(resolve => {
      scrapeIt(`https://photos.google.com/share/${source}`, {
        preview: {
          selector: '[property="og:image"]',
          attr: 'content'
        },
        width: {
          selector: '[property="og:image:width"]',
          attr: 'content',
          convert: str => parseInt(str)
        },
        height: {
          selector: '[property="og:image:height"]',
          attr: 'content',
          convert: str => parseInt(str)
        },
        url: {
          selector: '[property="og:url"]',
          attr: 'content'
        },
        title: {
          selector: '[property="og:title"]',
          attr: 'content'
        },
        count: {
          selector: '[property="og:description"]',
          attr: 'content',
          convert: str => parseInt(str.replace(/[^0-9]/g, ''))
        }
      })
      .then(result => resolve(result.data))
    })
  })

  // wait for results
  albums = await Promise.all(pending);

  // remove any albums that failed to load
  albums = albums.filter(album => !!album);

  // give back the result
  return albums
}
