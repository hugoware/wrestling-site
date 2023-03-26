import scrapeIt from 'scrape-it';

// holds the records in memory so the request for
// the roster data doesn't have to happen each request
const RECORDS = [];

// returns a list of all players
export default async function handler(req, res) {
  if (RECORDS.length) {
    return res.json({ success: true, roster: RECORDS });
  }
  
  // gather places to use
  const sources = await gatherSources();
  if (!sources.length) {
    return res.json({ success: false, err: 'No data was found. Missing available grade levels.'});
  }

  // gather all grades levels
  try {
    const records = await Promise.all(sources.map(source => extractRoster(source.id)));
    for (const collection of records) {
      RECORDS.push(...collection);
    }
  }
  catch (ex) {
    return res.json({ success: false, err: 'Unable to gather all roster information' });
  }

  // give back the result
  res.json({ success: true, roster: RECORDS });
}


// gathers all available IDs for each grade level of rosters
async function gatherSources() {
  return new Promise((resolve, reject) => {
    scrapeIt('https://www.coppellathletics.net/sport/wrestling/girls/?tab=roster', {
      grades: {
        listItem: 'select.schedule-submenu option',
        data: {
          name: { },
          id: {
            attr: 'value'
          }
        }
      }
    })
    .then(({ data: { grades } }) => resolve(grades))
    .catch(reject);
  })
}


// grabs a complete roster using the correct source ID
async function extractRoster(id) {
  return new Promise((resolve, reject) => {
    scrapeIt(`https://www.coppellathletics.net/sport/RefreshRosterAthleteStyle2ViewComponent/${id}?schoolYear=2022-2023`, {
      roster: {
        listItem: '#athlete-table tbody tr',
        data: {
          name: '[data-label=PLAYER]',
          grade: '[data-label=GRADE]',
          pictureUrl: {
            selector: 'img.roster-image',
            attr: 'src'
          }
        }
      }
    })
    .then(({ data: { roster } }) => resolve(roster))
    .catch(reject);
  });
}