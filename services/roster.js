import scrapeIt from 'scrape-it';
import hashCode from '../util/hashCode';

// holds the records in memory so the request for
// the roster data doesn't have to happen each request
const ROSTER = [];

// returns all wrestlers
export async function getAllWrestlers() {
  return await gatherWrestlers();
}

// gets a specific wrestler
export async function getWrestlerById(id) {
  const wrestlers = await getAllWrestlers();
  return wrestlers.find(player => player.id === id);
}

// returns a list of all players
async function gatherWrestlers() {
  if (ROSTER.length) {
    return ROSTER;
  }
  
  // gather places to use
  const sources = await gatherGradeLevelSources();
  if (!sources.length) {
    return null;
  }

  // gather all grades levels
  const pending = sources.map(source => extractGradeLevelRoster(source.id));
  const records = await Promise.all(pending);
  for (const collection of records) {
    ROSTER.push(...collection);
  }

  return ROSTER;
}

// gathers all available IDs for each grade level of rosters
async function gatherGradeLevelSources() {
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
async function extractGradeLevelRoster(id) {
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
    .then(({ data: { roster } }) => {
      for (const wrestler of roster) {
        wrestler.id = hashCode(wrestler.name);

      }
      
      resolve(roster)
    })
    .catch(reject);
  });
}
