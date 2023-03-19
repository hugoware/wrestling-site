import scrapeIt from 'scrape-it';

export default async function handler(req, res) {

  scrapeIt('https://www.coppellathletics.net/sport/wrestling/girls/?tab=roster', {
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
    res.json({ success: true, roster })
  })
  .catch(err => {
    res.json({ success: false , roster: []})

  });

}