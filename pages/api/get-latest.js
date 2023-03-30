import { toJson } from 'xml2json';
import moment from 'moment';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCscG26iBwigbgHcBq0lAjyQ');
    const data = await response.text();
    const result = JSON.parse(toJson(data));
    
    // gather up 
    const results = result.feed?.entry?.map(entry => {
      const { title, link: { href: mediaUrl }, published } = entry;
      const thumbnailUrl = entry['media:group']?.['media:thumbnail']?.url;
      const timeSpan = moment(published).fromNow()
      
      return { title, mediaUrl, thumbnailUrl, published, timeSpan };
    });
    
    // return all data
    res.json({ success: !!results?.length, results });
  }
  // failed to load
  catch (ex) {
    res.json({ success: false, error: ex.toString() })
  }
}

https://www.youtube.com/playlist?list=PL_9kt-BdQlByjEZu4DFtFHEW9Ewp1O6bt